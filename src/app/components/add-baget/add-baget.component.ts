import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BagetService} from "../../services/baget.service";
import {Observable} from "rxjs";
import {AddBaseComponent} from "../add-base/add-base.component";
import {BagetRef} from "./baget.model";

@Component({
  selector: 'app-add-baget',
  templateUrl: './add-baget.component.html',
  styleUrls: ['./add-baget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBagetComponent extends AddBaseComponent {
  bagetRef$: Observable<BagetRef[]>;

  constructor(
    modalService: NgbModal,
    private readonly bagetService: BagetService,
  ) {
    super(modalService);
    this.bagetRef$ = bagetService.bagetRef;
  }

  onFilter(value: string): void {
    console.log(value);
  }
}
