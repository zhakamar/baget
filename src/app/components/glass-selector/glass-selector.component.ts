import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExtrasRef, GlassRef} from "../../services/extras.model";
import {Observable} from "rxjs";
import {ExtrasService} from "../../services/extras.service";

@Component({
  selector: 'app-glass-selector',
  templateUrl: './glass-selector.component.html',
  styleUrls: ['./glass-selector.component.scss']
})
export class GlassSelectorComponent {
  @Output() onSelected = new EventEmitter<ExtrasRef>();

  constructor(readonly extrasService: ExtrasService) {
  }

  set model(value: ExtrasRef) {
    this.onSelected.emit(value);
  }
}
