import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeLogin13Service {

  isConnect : boolean = false

  constructor() { }

  
  login()
  {
    this.isConnect = true
  }

  logout()
  {
    this.isConnect = false
  }
}
