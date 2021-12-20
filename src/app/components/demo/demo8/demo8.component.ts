import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html'
})
export class Demo8Component implements OnInit {

  pTag : boolean = false
  typeInput : string = "range"
  maxInput : number = 100
  minInput : number = 0
  valueInput : number = 75
  stepInput : number = 5
  button : boolean = true

  color : string = "chartreuse"

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
