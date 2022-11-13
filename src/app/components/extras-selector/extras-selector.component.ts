import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { ExtrasService } from "../../services/extras.service";
import { switchMap, takeUntil, tap } from "rxjs/operators";
import { map, Observable, Subject } from "rxjs";
import { ExtrasRef } from "../../services/extras.model";

@Component({
  selector: 'app-extras-selector',
  templateUrl: './extras-selector.component.html',
  styleUrls: ['./extras-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtrasSelectorComponent implements OnDestroy {
  private readonly unsubscribe$ = new Subject<void>();

  @Output() onChanged = new EventEmitter<ExtrasRef[]>();

  private extrasData!: ExtrasRef[];
  private extrasChanged$!: Observable<ExtrasRef>;
  extrasSelectorForm!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    readonly extrasService: ExtrasService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
    this.extrasChanged$ = this.extrasService.extrasRef$.pipe(
      map(extra => {
        this.extrasData = extra;
        const extrasControls = extra.reduce((prev, cur) => Object.assign(prev, { [`f_${cur.id}`]: false }), []);
        this.extrasSelectorForm = this.fb.group({ ...extrasControls });
        this.changeDetector.markForCheck();
        return this.extrasSelectorForm;
      }),
      switchMap(changes => changes.valueChanges),
    );

    this.extrasChanged$.pipe(
      tap(extras => {
        const res: ExtrasRef[] = [];

        Object.entries(extras)
          .filter(e => e[1])
          .forEach((el, index) => res.push(
            ...this.extrasData.filter(e => `f_${e.id}` === el[0]))
          );

        this.onChanged.emit(res);
      }),
      takeUntil(this.unsubscribe$),
    ).subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
