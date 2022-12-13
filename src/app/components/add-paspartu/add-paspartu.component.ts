import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {tap} from "rxjs";
import {AddBaseComponent} from "../add-base/add-base.component";
import {PaspartuRef} from "./paspartu.model";
import {PaspartuService} from "../../services/paspartu.service";
import {take} from "rxjs/operators";


@Component({
  selector: 'app-add-paspartu',
  templateUrl: './add-paspartu.component.html',
  styleUrls: ['./add-paspartu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPaspartuComponent extends AddBaseComponent {
  @Input() paspartuNum!: number;

  paspartuRef: PaspartuRef[] = [];
  private paspartuRefBackup: PaspartuRef[] = [];

  constructor(
    modalService: NgbModal,
    private readonly paspartuService: PaspartuService,
  ) {
    super(modalService);
    paspartuService.paspartuRef$.pipe(
      take(1),
      tap(paspartu => this.paspartuRef = paspartu),
    ).subscribe();
  }

  onFilter(value: string): void {
    super.onFilter(value);

    if (value) {
      this.paspartuService.findByArticle<PaspartuRef[], string>('paspartu', value).pipe(
        tap(result => {
          if (!this.useSearch) { this.paspartuRefBackup = this.paspartuRef; }
          this.paspartuRef = result;
          this.useSearch = true;
        }),
      ).subscribe();
    } else {
      this.useSearch = false;
      setTimeout(() => this.paspartuRef = this.paspartuRefBackup);
    }
  }
}
