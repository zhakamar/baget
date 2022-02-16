import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FrameSize} from "./calc.model";
import {BagetRef} from "../add-baget/baget.model";
import {PaspartuRef} from "../add-paspartu/paspartu.model";
import {FormBuilder} from "@angular/forms";
import {Subject} from "rxjs";
import {takeUntil, tap} from "rxjs/operators";
import {ExtrasService} from "../../services/extras.service";
import {ExtrasRef} from "../../services/extras.model";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalcComponent {

  private readonly unsubscribe$: Subject<void> = new Subject();

  private frameSize!: FrameSize;
  private _baget!: BagetRef;
  private _paspartu1!: PaspartuRef;
  private _paspartu2!: PaspartuRef;
  private _paspartu3!: PaspartuRef;
  private _glass!: ExtrasRef;
  private _extras!: ExtrasRef;

  sizeSelectorForm = this.fb.group({
    sizeType: 'inner',
    width: 0,
    height: 0,
  })

  constructor(
    private fb: FormBuilder,
    readonly extrasService: ExtrasService,
  ) {
    this.sizeSelectorForm.valueChanges.pipe(
      tap(el => this.frameSize = el),
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
    console.log(value);
  }

  get extras(): ExtrasRef {
    return this._extras;
  }

  set extras(value: ExtrasRef) {
    this._extras = value;
  }
}
