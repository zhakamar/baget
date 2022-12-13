import {Injectable} from '@angular/core';
import {CoreService} from "./core.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BagetService extends CoreService {

  constructor(http: HttpClient) {
    super(http);
  }
}
