import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html'
})
export class Demo7Component implements OnInit {

  isOpen : boolean = undefined
  liste : string[] = undefined
  liste2 : {} = undefined
  liste3 : any[] = undefined
  liste4 : any[] = undefined

  constructor() {
    this.isOpen = true
    this.liste = ["pomme", "poire", "banane", "oranges"]
    this.liste2 = {
      a : "pomme",
      b : "poire",
      c : "banane",
      d : "oranges"
    }


    this.liste3 = [
      { a : "pomme", b : "poire", c : "banane", d : "oranges" },
      { a : "pomme", b : "poire", c : "banane", d : "oranges" },
      { a : "pomme", b : "poire", c : "banane", d : "oranges" },
      { a : "pomme", b : "poire", c : "banane", d : "oranges" }
    ]

    this.liste4 = [
      {...this.liste2},
      {...this.liste2},
      {...this.liste2},
      {...this.liste2},
    ]


    console.log(this.liste)
    console.log(this.liste2)
    console.log(this.liste3)
    console.log(this.liste4)
  }

  ngOnInit(): void {
  }

  openClose()
  {
    this.isOpen = !this.isOpen
  }

}
