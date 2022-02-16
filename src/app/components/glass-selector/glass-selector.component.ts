import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExtrasRef, GlassRef} from "../../services/extras.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-glass-selector',
  templateUrl: './glass-selector.component.html',
  styleUrls: ['./glass-selector.component.scss']
})
export class GlassSelectorComponent {
  @Input() optionRef$?: Observable<GlassRef[]>;
  @Output() onSelected = new EventEmitter<ExtrasRef>();

  set model(value: ExtrasRef) {
    this.onSelected.emit(value);
  }
}
