import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html'
})
export class Demo4Component implements OnInit {

  public nb1 : number = undefined
  public nb2 : number = undefined

  constructor() {
    this.nb1 = 0
    this.nb2 = 0
  }

  
  ngOnInit(): void {
  }

  /**
   * De la doc !
   */
  add() : void{
    this.nb1++
  }

  rem() : void{
    this.nb1--
  }

  res() : void{
    this.nb1 = 0
  }

  addParam(added : number) : void
  {
    this.nb2 += added
  }

  remParam(removed : number) : void
  {
    this.nb2 -= removed
  }

  resParam(reseter : number) : void
  {
    this.nb2 = reseter
  }
}
