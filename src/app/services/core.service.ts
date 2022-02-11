import { Injectable } from '@angular/core';
import {AppConfig as param} from "../app.config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private readonly http: HttpClient) { }

  get<T>(entity: string): Observable<T> {
    return this.http.get<T>(`${param.apiURL}/${entity}`);
  }
}
