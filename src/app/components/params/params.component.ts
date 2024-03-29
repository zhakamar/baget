import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FrameSize } from "./params.model";
import { BagetRef } from "../add-baget/baget.model";
import { PaspartuRef } from "../add-paspartu/paspartu.model";
import { UntypedFormBuilder, UntypedFormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";
import { ExtrasRef } from "../../services/extras.model";
import { FrameType } from "../frame-selector/frame-selector.model";

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParamsComponent implements OnDestroy {
  private readonly unsubscribe$ = new Subject<void>();

  private frameSize: FrameSize = { sizeType: 'inner', width: 0, height: 0 };
  private frameType: FrameType = { frameType: 'podves' };
  private _baget!: BagetRef;
  private _paspartu1!: PaspartuRef;
  private _paspartu2!: PaspartuRef;
  private _paspartu3!: PaspartuRef;
  private _glass!: ExtrasRef;
  private _extras!: ExtrasRef[];

  orderComment = new UntypedFormControl('');

  sizeSelectorForm = this.fb.group({
    sizeType: 'inner',
    width: 0,
    height: 0,
  })

  frameSelectorForm = this.fb.group({
    frameType: 'podves',
  })

  constructor(private fb: UntypedFormBuilder) {
    this.sizeSelectorForm.valueChanges.pipe(
      tap(el => this.frameSize = el),
      takeUntil(this.unsubscribe$),
    ).subscribe();

    this.frameSelectorForm.valueChanges.pipe(
      tap(el => this.frameType = el),
      takeUntil(this.unsubscribe$),
    ).subscribe();
  }


  get baget(): BagetRef {
    return this._baget;
  }

  set baget(value: BagetRef) {
    this._baget = value;
  }

  get paspartu1(): PaspartuRef {
    return this._paspartu1;
  }

  set paspartu1(value: PaspartuRef) {
    this._paspartu1 = value;
    if (!value) {
      this.paspartu2 = value
    }
  }

  get paspartu2(): PaspartuRef {
    return this._paspartu2;
  }

  set paspartu2(value: PaspartuRef) {
    this._paspartu2 = value;
    if (!value) {
      this.paspartu3 = value
    }
  }

  get paspartu3(): PaspartuRef {
    return this._paspartu3;
  }

  set paspartu3(value: PaspartuRef) {
    this._paspartu3 = value;
  }

  get glass(): ExtrasRef {
    return this._glass;
  }

  set glass(value: ExtrasRef) {
    this._glass = value;
  }

  get extras(): ExtrasRef[] {
    return this._extras;
  }

  set extras(value: ExtrasRef[]) {
    this._extras = value;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
