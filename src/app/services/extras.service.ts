import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CoreService} from "./core.service";
import {map, Observable, ReplaySubject} from "rxjs";
import {ExtrasRef} from "./extras.model";
import {share} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ExtrasService extends CoreService {

  private extrasAll$: Observable<ExtrasRef[]>;

  constructor(http: HttpClient) {
    super(http);

    this.extrasAll$ = super.get<ExtrasRef[]>('extras').pipe(
      share({
        connector: () => new ReplaySubject(1),
        resetOnError: false,
        resetOnComplete: false,
        resetOnRefCountZero: false,
      }),
    );
  }

  get glassRef$(): Observable<ExtrasRef[]> {
    return this.extrasAll$.pipe(
      map(el => el.filter(e => e.glass)),
    );
  }

  get extrasRef$(): Observable<ExtrasRef[]> {
    return this.extrasAll$.pipe(
      map(el => el.filter(e => !e.glass)),
    );
  }
}
