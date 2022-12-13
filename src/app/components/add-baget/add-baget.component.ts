import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BagetService} from "../../services/baget.service";
import {Subject} from "rxjs";
import {AddBaseComponent} from "../add-base/add-base.component";
import {BagetRef} from "./baget.model";
import {takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-add-baget',
  templateUrl: './add-baget.component.html',
  styleUrls: ['./add-baget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBagetComponent extends AddBaseComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();

  bagetRef: BagetRef[] = [];
  take = 9;
  skip = 0;
  throttle = 50;
  distance = 2;

  constructor(
    modalService: NgbModal,
    private readonly bagetService: BagetService,
  ) {
    super(modalService);
  }

  ngOnInit() {
    this.bagetService.bagetRefPartial(this.take, this.skip).pipe(
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
      tap(baget => this.bagetRef.push(...baget)),
      takeUntil(this.unsubscribe$),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
