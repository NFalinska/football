import { Component, OnInit, Input } from '@angular/core';
import { CountryService }           from "./country.service";



@Component({
  selector: 'app-country-comp',
  templateUrl: './country-comp.component.html',
  styleUrls: ['./country-comp.component.css']
})
export class CountryCompComponent implements OnInit {
  countries: string;
  @Input() code: string;

  constructor(private CountryService:CountryService) {
  }

  ngOnInit() {
    this.CountryService.getCountry()
        .subscribe(
            data => {
      this.countries = data;
    });

  }

}
