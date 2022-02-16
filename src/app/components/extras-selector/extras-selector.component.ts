import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ExtrasService} from "../../services/extras.service";

@Component({
  selector: 'app-extras-selector',
  templateUrl: './extras-selector.component.html',
  styleUrls: ['./extras-selector.component.scss']
})
export class ExtrasSelectorComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    readonly extrasService: ExtrasService,
  ) {

  }

  extrasSelectorForm = this.fb.group({

  });

  ngOnInit(): void {
  }

}
