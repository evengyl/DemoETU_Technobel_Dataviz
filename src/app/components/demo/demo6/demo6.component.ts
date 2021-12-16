import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html'
})
export class Demo6Component implements OnInit {

  var1 : number = undefined
  varPow : number = undefined
  varZak : number = undefined
  powZak : number = undefined

  constructor() {
    this.var1 = 42
    this.varPow = 2
  }

  ngOnInit(): void {
  }

}
