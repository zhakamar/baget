import {Injectable} from '@angular/core';
import {AppSettings} from "../app.config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BagetService {
  private readonly apiURL: string;

  constructor(
    private readonly settings: AppSettings,
    private readonly http: HttpClient,
  ) {
    this.apiURL = this.settings.apiURL;
  }

  get bagetRef(): Observable<Object> {
    return this.http.get(`${this.apiURL}/baget`);
  }
}
