import {Component, OnInit} from '@angular/core';
import {FrameType} from "./frame-selector.model";
import {ControlContainer, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-frame-selector',
  templateUrl: './frame-selector.component.html',
  styleUrls: ['./frame-selector.component.scss']
})
export class FrameSelectorComponent implements OnInit {
  frameSelectorForm!: UntypedFormGroup;

  frameTypes: FrameType[] = [
    { frameType: 'horiz', frameName: 'Горизонтально' },
    { frameType: 'vert', frameName: 'Вертикально' },
    { frameType: 'podves', frameName: 'Подвесы в комплекте' },
  ]

  constructor(private readonly controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.frameSelectorForm = <UntypedFormGroup>this.controlContainer.control;
  }

}
