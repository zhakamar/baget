import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BagetService} from "../../services/baget.service";
import {switchMap} from "rxjs";
import {AddBaseComponent} from "../add-base/add-base.component";
import {BagetRef} from "./baget.model";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-add-baget',
  templateUrl: './add-baget.component.html',
  styleUrls: ['./add-baget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBagetComponent extends AddBaseComponent {
  bagetRef: BagetRef[] = [];
  private bagetRefBackup: BagetRef[] = [];

  constructor(
    modalService: NgbModal,
    private readonly bagetService: BagetService,
  ) {
    super(modalService);

    bagetService.getCount<number>('baget').pipe(
      tap(count => this.count = count),
      switchMap(() => this.bagetService.getPartial<BagetRef[]>('baget', { take: this.take, skip: this.skip })),
      tap(baget => this.bagetRef = baget),
    ).subscribe();
  }

  onFilter(value: string): void {
    super.onFilter(value);

    if (value) {
      this.bagetService.findByArticle<BagetRef[], string>('baget', value).pipe(
        tap(result => {
          if (!this.useSearch) { this.bagetRefBackup = this.bagetRef; }
          this.bagetRef = result;
          this.useSearch = true;
        }),
      ).subscribe();
    } else {
      this.useSearch = false;
      setTimeout(() => this.bagetRef = this.bagetRefBackup);
    }
  }

  onScroll(): void {
    if (this.useSearch) { return }

    this.skip += this.take;
    this.bagetService.getPartial<BagetRef[]>('baget', { take: this.take, skip: this.skip }).pipe(
      tap(baget => this.bagetRef.push(...baget)),
    ).subscribe();
  }
}
