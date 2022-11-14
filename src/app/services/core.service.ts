import { Injectable } from '@angular/core';
import { AppConfig as param } from "../app.config";
import { HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject } from "rxjs";
import { share } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private readonly http: HttpClient) {
  }

  private readonly getMap = new Map<string, Observable<unknown>>();

  get<T>(entity: string): Observable<T> {
    return (
      this.getMap.has(entity) ?
        this.getMap :
        this.getMap.set(entity, this.http.get<T>(`${param.apiURL}/${entity}`).pipe(
          share({
            connector: () => new ReplaySubject(1),
            resetOnError: false,
            resetOnComplete: false,
            resetOnRefCountZero: false,
          }),
        ))).get(entity) as Observable<T>;
  }
}
