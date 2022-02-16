import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExtrasRef} from "../../services/extras.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.scss']
})
export class OptionSelectorComponent {
  @Input() optionRef$?: Observable<ExtrasRef[]>;
  @Output() onSelected = new EventEmitter<ExtrasRef>();

  set model(value: ExtrasRef) {
    this.onSelected.emit(value);
  }
}
