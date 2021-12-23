import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo19',
  templateUrl: './demo19.component.html'
})
export class Demo19Component implements OnInit {

  isConnect : boolean

  constructor() { }

  ngOnInit(): void {
  }

  login()
  {
    this.isConnect = true
    let userInfos = {
      name : "Loic",
      email : "tutu@tutu.be"
    }
    sessionStorage.setItem("isConnect", "true")
    sessionStorage.setItem("userInfos", JSON.stringify(userInfos))
  }

  logout()
  {
    this.isConnect = false

    sessionStorage.removeItem("isConnect")

  }

}
