import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CoreService} from "./core.service";
import {Observable, ReplaySubject} from "rxjs";
import {ExtrasRef} from "./extras.model";
import {share} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ExtrasService extends CoreService {

  private extras$: Observable<ExtrasRef[]>;

  constructor(http: HttpClient) {
    super(http);

    this.extras$ = super.get<ExtrasRef[]>('extras').pipe(
      share({
        connector: () => new ReplaySubject(1),
        resetOnError: false,
        resetOnComplete: false,
        resetOnRefCountZero: false,
      }),
    );
  }



}
