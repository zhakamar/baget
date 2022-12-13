import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BagetRef} from "../components/add-baget/baget.model";
import {CoreService} from "./core.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BagetService extends CoreService {

  constructor(http: HttpClient) {
    super(http);
  }

  get bagetRef(): Observable<BagetRef[]> {
    return super.getCached('baget');
  }

  bagetRefPartial(take: number, skip: number): Observable<BagetRef[]> {
    return super.getPartial('baget', { take, skip });
  }
}
