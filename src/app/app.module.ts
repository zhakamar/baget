import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './layout/main/main.component';
import {PreviewComponent} from './components/preview/preview.component';
import {ResultComponent} from './components/result/result.component';
import {CalcComponent} from './components/calc/calc.component';
import {HeaderComponent} from './layout/header/header.component';
import {OrderButtonsComponent} from './components/order-buttons/order-buttons.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AddBagetComponent} from './components/add-baget/add-baget.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreviewComponent,
    ResultComponent,
    CalcComponent,
    HeaderComponent,
    OrderButtonsComponent,
    AddBagetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
