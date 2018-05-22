import { Component, OnInit } from '@angular/core';
import { Team }              from "./team-comp.model";
import { TeamService }       from "./team.service";

@Component({
  selector: 'app-team-comp',
  templateUrl: './team-comp.component.html',
  styleUrls: ['./team-comp.component.css'],
})
export class TeamCompComponent implements OnInit {
  teams: Team[];
  teamSelected = 0;
  index = null;
  countryCode: string;
  
  constructor(private TeamService:TeamService) {
  }

  ngOnInit() {
    this.TeamService.getTeam().subscribe(data => {
      this.teams = data;
    });

  }

  onChanged() {
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].id == this.teamSelected) {
        this.index = i; 
        this.countryCode = this.teams[i].countyCode;
        return true;
      }
    }
    this.index = null;
  }


}