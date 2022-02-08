import {Injectable} from '@angular/core';
import {AppSettings} from "../app.config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PaspartuRef} from "../components/add-paspartu/paspartu.model";

@Injectable({
  providedIn: 'root'
})
export class PaspartuService {
  private readonly apiURL: string;

  constructor(
    private readonly settings: AppSettings,
    private readonly http: HttpClient,
  ) {
    this.apiURL = this.settings.apiURL;
  }

  get paspartuRef(): Observable<PaspartuRef[]> {
    return this.http.get<PaspartuRef[]>(`${this.apiURL}/paspartu`);
  }
}
