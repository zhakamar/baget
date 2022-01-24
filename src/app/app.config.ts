import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AppSettings {
  readonly apiURL = 'https://kodak.karelia.ru:3000';
}
