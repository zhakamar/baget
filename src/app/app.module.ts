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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddBagetComponent} from './components/add-baget/add-baget.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {AddPaspartuComponent} from "./components/add-paspartu/add-paspartu.component";
import {SizeSelectorComponent} from './components/size-selector/size-selector.component';
import {AddBaseComponent} from './components/add-base/add-base.component';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreviewComponent,
    ResultComponent,
    CalcComponent,
    HeaderComponent,
    OrderButtonsComponent,
    AddBagetComponent,
    AddPaspartuComponent,
    SizeSelectorComponent,
    AddBaseComponent,
    OptionSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
