import { Component, OnInit } from '@angular/core';
import { FakeLogin13Service } from './services/fake-login13.service';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html'
})
export class Demo13Component implements OnInit {

  isConnect : boolean = undefined

  constructor(private loginServ : FakeLogin13Service) {
    this.isConnect = this.loginServ.isConnect
  }

  ngOnInit(): void {
  }

  login()
  {
    this.loginServ.login()
    this.isConnect = this.loginServ.isConnect
  }

  logout()
  {
    this.loginServ.logout()
    this.isConnect = this.loginServ.isConnect
  }

}
