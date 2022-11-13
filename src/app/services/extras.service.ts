import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CoreService } from "./core.service";
import { Observable, ReplaySubject } from "rxjs";
import { ExtrasRef, GlassRef } from "./extras.model";
import { share } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ExtrasService extends CoreService {
  glassRef$: Observable<GlassRef[]>;
  extrasRef$: Observable<ExtrasRef[]>;


  constructor(http: HttpClient) {
    super(http);

    this.glassRef$ = super.get<GlassRef[]>('glass').pipe(
      share({
        connector: () => new ReplaySubject(1),
        resetOnError: false,
        resetOnComplete: false,
        resetOnRefCountZero: false,
      }),
    );

    this.extrasRef$ = super.get<ExtrasRef[]>('extras').pipe(
      share({
        connector: () => new ReplaySubject(1),
        resetOnError: false,
        resetOnComplete: false,
        resetOnRefCountZero: false,
      }),
    );
  }
}
