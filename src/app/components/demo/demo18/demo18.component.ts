import { Component, OnInit } from '@angular/core';
import { CountriesService } from './serivces/countries.service';

@Component({
  selector: 'app-demo18',
  templateUrl: './demo18.component.html'
})
export class Demo18Component implements OnInit {

  listCountries : any[]
  oneCountry : any

  constructor(private countryServ : CountriesService) { }

  ngOnInit(): void {
    this.countryServ.getAllCountries().subscribe((value : any) => {
      this.listCountries = value 
    })
  }

  detailsCountry(name : string)
  {
    this.countryServ.getOneByName(name).subscribe((value) => {
      this.oneCountry = value[0]
      console.log(value)
    })
  }

  

}
