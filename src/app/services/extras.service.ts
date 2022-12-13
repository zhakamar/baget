import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CoreService } from "./core.service";
import { Observable } from "rxjs";
import { ExtrasRef, GlassRef } from "./extras.model";

@Injectable({
  providedIn: 'root'
})
export class ExtrasService extends CoreService {
  glassRef$: Observable<GlassRef[]>;
  extrasRef$: Observable<ExtrasRef[]>;


  constructor(http: HttpClient) {
    super(http);

    this.glassRef$ = super.getCached<GlassRef[]>('glass');
    this.extrasRef$ = super.getCached<ExtrasRef[]>('extras');
  }
}
