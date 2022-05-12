import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from "@angular/forms";
import { Subject, tap } from 'rxjs';
import { FrameSize } from "../calc/calc.model";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizeSelectorComponent implements OnInit, OnDestroy {
  private readonly destroySubject = new Subject<void>();

  sizeSelectorForm!: FormGroup;

  constructor(private readonly controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.sizeSelectorForm = <FormGroup>this.controlContainer.control;
    this.sizeSelectorForm.patchValue({ width: 10, height: 10 });

    // may will be needed in future ???
    // this.sizeSelectorForm.valueChanges.pipe(
    //   tap<FrameSize>(el => {
    //     if (el.height < 10) this.sizeSelectorForm.patchValue({ height: 10 });
    //     if (el.height > 100) this.sizeSelectorForm.patchValue({ height: 100 });
    //     if (el.width < 10) this.sizeSelectorForm.patchValue({ width: 10 });
    //     if (el.width > 100) this.sizeSelectorForm.patchValue({ width: 100 });
    //   }),
    //   takeUntil(this.destroySubject),
    // ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
