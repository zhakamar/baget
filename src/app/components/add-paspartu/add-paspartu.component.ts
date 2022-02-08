import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Observable} from "rxjs";
import {AddBaseComponent} from "../add-base/add-base.component";
import {PaspartuRef} from "./paspartu.model";
import {PaspartuService} from "../../services/paspartu.service";


@Component({
  selector: 'app-add-paspartu',
  templateUrl: './add-paspartu.component.html',
  styleUrls: ['./add-paspartu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPaspartuComponent extends AddBaseComponent {
  @Input() paspartuNum!: number;
  paspartuRef$: Observable<PaspartuRef[]>;

  constructor(
    modalService: NgbModal,
    private readonly paspartuService: PaspartuService,
  ) {
    super(modalService);
    this.paspartuRef$ = paspartuService.paspartuRef;
  }
}
