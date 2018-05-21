import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {

  }

  public getCountry(): Observable<any> {
    return this.http.get("./assets/country.json", {responseType: 'json'})

  }
}
