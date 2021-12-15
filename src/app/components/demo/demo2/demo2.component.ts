import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html'
})
export class Demo2Component implements OnInit {

  public var1 : string = undefined
  public var2 : number = undefined
  public var3 : boolean = true

  constructor() {
  }

  ngOnInit(): void {
  }

}
