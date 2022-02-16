import {Component, EventEmitter, Output, TemplateRef} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {BagetRef} from "../add-baget/baget.model";
import {PaspartuRef} from "../add-paspartu/paspartu.model";

@Component({
  selector: 'app-add-base',
  template: '',
})
export class AddBaseComponent {
  @Output() onSelected = new EventEmitter<BagetRef | PaspartuRef>();

  readonly NOT_SELECTED = 'не выбрано';

  modalRef!: NgbModalRef;
  modalResult?: BagetRef | PaspartuRef;

  constructor(
    private readonly modalService: NgbModal,
  ) {
  }

  triggerModal(content: TemplateRef<any>): void {
    this.modalRef = this.modalService.open(content, {scrollable: true});
  }

  setModalResult(res: BagetRef | PaspartuRef): void {
    this.modalResult = res;
    this.onSelected.emit(res);
    this.modalRef.close();
  }

  clear(): void {
    this.modalResult = undefined;
    this.onSelected.emit(undefined);
  }
}
