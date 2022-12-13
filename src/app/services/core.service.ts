import { Injectable } from '@angular/core';
import { AppConfig as config } from "../app.config";
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

  getCached<T>(entity: string): Observable<T> {
    return (
      this.getMap.has(entity) ?
        this.getMap :
        this.getMap.set(entity, this.http.get<T>(`${config.apiURL}/${entity}`).pipe(
          share({
            connector: () => new ReplaySubject(1),
            resetOnError: false,
            resetOnComplete: false,
            resetOnRefCountZero: false,
          }),
        ))).get(entity) as Observable<T>;
  }

  getPartial<T>(entity: string, params?: Record<'take' | 'skip', number>): Observable<T> {
    return this.http.get<T>(`${config.apiURL}/${entity}/partial`, { params });
  }
}
