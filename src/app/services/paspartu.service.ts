import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PaspartuRef} from "../components/add-paspartu/paspartu.model";
import {CoreService} from "./core.service";

@Injectable({
  providedIn: 'root'
})
export class PaspartuService extends CoreService {
  constructor(http: HttpClient) {
    super(http);
  }

  get paspartuRef(): Observable<PaspartuRef[]> {
    return super.get('paspartu');
  }
}
