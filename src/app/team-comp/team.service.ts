import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";


@Injectable()
export class TeamService {


constructor(private httpClient: HttpClient) {
  
}

public getTeam(): Observable<any> {
  return this.httpClient.get("./assets/teamdata.json", {responseType: 'json'})
  
}
}




