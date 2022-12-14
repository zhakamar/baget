import { Component, EventEmitter, Output } from '@angular/core';
import { ExtrasRef, GlassRef } from "../../services/extras.model";
import { Observable } from "rxjs";
import { ExtrasService } from "../../services/extras.service";

@Component({
  selector: 'app-glass-selector',
  templateUrl: './glass-selector.component.html',
  styleUrls: ['./glass-selector.component.scss'],
})
export class GlassSelectorComponent {
  @Output() onSelected = new EventEmitter<ExtrasRef>();

  glassRef$: Observable<GlassRef[]>;

  constructor(private readonly extrasService: ExtrasService) {
    this.glassRef$ = extrasService.glassRef$;
  }

  set model(value: ExtrasRef) {
    this.onSelected.emit(value);
  }

  get model() {
    return null as unknown as ExtrasRef
  }
}
