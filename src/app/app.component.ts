import { Component } from '@angular/core';
import {NgbTooltipConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Багетный калькулятор';

  constructor(tooltipConfig: NgbTooltipConfig) {
    tooltipConfig.triggers = 'hover';
    tooltipConfig.tooltipClass = 'kodak-tooltip';
  }
}
