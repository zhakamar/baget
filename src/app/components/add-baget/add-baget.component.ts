import {Component, Output, EventEmitter, TemplateRef} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-baget',
  templateUrl: './add-baget.component.html',
  styleUrls: ['./add-baget.component.scss']
})
export class AddBagetComponent {
  // @Output() modalResult = new EventEmitter<string>();
  modalRef!: NgbModalRef;
  modalResult = '';

  triggerModal(content: TemplateRef<any>): void {
    this.modalRef = this.modalService.open(content);
  }

  setModalResult(res: string) {
    this.modalResult = res;
    this.modalRef.close();
  }

  constructor(private readonly modalService: NgbModal) {
  }
}
