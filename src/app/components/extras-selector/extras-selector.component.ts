import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ExtrasService} from "../../services/extras.service";
import {filter, switchMap, takeUntil, tap} from "rxjs/operators";
import {map, Observable, Subject} from "rxjs";
import {ExtrasRef} from "../../services/extras.model";

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
  extrasSelectorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    readonly extrasService: ExtrasService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
    this.extrasChanged$ = this.extrasService.extrasRef$.pipe(
      map(extra => {
        this.extrasData = extra;
        const extrasControls = extra.reduce((prev, cur, i) => Object.assign(prev, {[`f_${++i}`]: false}), []);
        this.extrasSelectorForm = this.fb.group({...extrasControls});
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
          .forEach(el => res.push(
            ...this.extrasData.filter(e => e.formControlName === el[0]))
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
