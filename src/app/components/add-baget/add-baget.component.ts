import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BagetService} from "../../services/baget.service";
import {Subject, switchMap} from "rxjs";
import {AddBaseComponent} from "../add-base/add-base.component";
import {BagetRef} from "./baget.model";
import {take, takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-add-baget',
  templateUrl: './add-baget.component.html',
  styleUrls: ['./add-baget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBagetComponent extends AddBaseComponent implements OnDestroy {
  unsubscribe$ = new Subject<void>();

  bagetRef: BagetRef[] = [];
  private readonly take = 9;
  private count = 0;
  private skip = 0;
  throttle = 50;
  distance = 2;

  constructor(
    modalService: NgbModal,
    private readonly bagetService: BagetService,
  ) {
    super(modalService);

    this.bagetService.bagetRefCount().pipe(
      tap(count => this.count = count),
      switchMap(() => this.bagetService.bagetRefPartial(this.take, this.skip)),
      tap(baget => this.bagetRef = baget),
      takeUntil(this.unsubscribe$),
    ).subscribe();
  }

  onFilter(value: string): void {
    console.log(value);
  }

  onScroll(): void {
    this.skip += this.take;
    this.bagetService.bagetRefPartial(this.take, this.skip).pipe(
      take(this.count - this.bagetRef.length),
      tap(baget => this.bagetRef.push(...baget)),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
