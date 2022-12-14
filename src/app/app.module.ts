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
import { GlassSelectorComponent } from './components/glass-selector/glass-selector.component';
import { ExtrasSelectorComponent } from './components/extras-selector/extras-selector.component';
import { FrameSelectorComponent } from './components/frame-selector/frame-selector.component';
import { FilterComponent } from './components/filter/filter.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { ErrorComponent } from './layout/error/error.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

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
    GlassSelectorComponent,
    ExtrasSelectorComponent,
    FrameSelectorComponent,
    FilterComponent,
    ErrorComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
