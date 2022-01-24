import {Component, TemplateRef} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {BagetService} from "../../services/baget.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-add-baget',
  templateUrl: './add-baget.component.html',
  styleUrls: ['./add-baget.component.scss']
})
export class AddBagetComponent {
  // @Output() modalResult = new EventEmitter<string>();
  modalRef!: NgbModalRef;
  modalResult = '';

  constructor(
    private readonly modalService: NgbModal,
    private readonly bagetService: BagetService,
  ) {
    bagetService.bagetRef.pipe(
      tap(el => console.log(el)),
    ).subscribe();
  }

  triggerModal(content: TemplateRef<any>): void {
    this.modalRef = this.modalService.open(content);
  }

  setModalResult(res: string) {
    this.modalResult = res;
    this.modalRef.close();
  }

}
