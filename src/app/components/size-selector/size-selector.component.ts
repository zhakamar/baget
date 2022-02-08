import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ControlContainer, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizeSelectorComponent implements OnInit {
  sizeSelectorForm!: FormGroup;

  constructor(private readonly controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.sizeSelectorForm = <FormGroup>this.controlContainer.control;
  }
}
