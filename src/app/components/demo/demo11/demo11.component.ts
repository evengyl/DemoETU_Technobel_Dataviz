import { Component, OnInit } from '@angular/core';
import { FakeLoginDemo11Service } from './services/fake-login-demo11.service';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html'
})
export class Demo11Component implements OnInit {

  isConnect : boolean = undefined

  constructor(private fakeLogin : FakeLoginDemo11Service) {
    this.isConnect = this.fakeLogin.isConnect
  }

  ngOnInit(): void {
  }

  login()
  {
    this.fakeLogin.login()
    this.isConnect = this.fakeLogin.isConnect
  }

  logout()
  {
    this.fakeLogin.logout()
    this.isConnect = this.fakeLogin.isConnect

  }
}
