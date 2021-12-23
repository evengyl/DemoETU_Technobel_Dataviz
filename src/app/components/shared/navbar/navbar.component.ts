import { Component, OnInit } from '@angular/core';
import { FakeLogin17Service } from '../../demo/demo17/services/fake-login17.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isConnect : boolean = undefined

  /* part obs demo 17, of() */
  simpleOfResponse : number

  /* part obs demo 17, from() */
  simpleFromResponse : string

  /* part obs demo 17, interval() */
  simpleIntervalResponse : number


  constructor(private fakeLogin17 : FakeLogin17Service) {
    this.isConnect = this.fakeLogin17.isConnect
  }

  ngOnInit(): void {
    /* part obs demo 17, of() */
    this.fakeLogin17.simpleOf$.subscribe((value) => {
      this.simpleOfResponse = value
    })


    this.fakeLogin17.simpleFrom$.subscribe((value) => {
      this.simpleFromResponse = value
    })

    this.fakeLogin17.simpleInterval$.subscribe((value) => {
      this.simpleIntervalResponse = value
    })


    this.fakeLogin17.mySubject$.subscribe((value) => {
      this.isConnect = value
    })

  }

  

}
