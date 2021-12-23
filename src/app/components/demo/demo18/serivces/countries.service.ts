import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl : string = "https://restcountries.com/v3.1"

  constructor(private client : HttpClient) { }

  getAllCountries()
  {
    return this.client.get<any>(this.baseUrl + "/all")
  }

  getOneByName(name : string)
  {
    return this.client.get<any>(this.baseUrl + "/name/" + name)
  }


}
