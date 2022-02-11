import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CoreService} from "./core.service";
import {Observable} from "rxjs";
import {ExtrasRef} from "./extras.model";

@Injectable({
  providedIn: 'root'
})
export class ExtrasService extends CoreService {

  constructor(http: HttpClient) {
    super(http);
  }

  get ExtrasRef(): Observable<ExtrasRef[]> {
    return super.get('extras');
  }
}
