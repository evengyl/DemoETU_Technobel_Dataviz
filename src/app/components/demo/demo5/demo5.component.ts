import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html'
})
export class Demo5Component implements OnInit {

  maVar1 : string = undefined
  maVar2 : number = undefined
  maVar3 : Date = undefined

  constructor() {
    this.maVar1 = "Salut les gens"
    this.maVar2 = 150.15564
    this.maVar3 = new Date()
  }

  ngOnInit(): void {
  }

}
