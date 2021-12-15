import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html'
})
export class Demo1Component implements OnInit {

  public var1 : string = undefined
  public var2 : number = undefined
  public var3 : boolean = undefined

  constructor() {
    this.var1 = "Bonjour les loulous"
    this.var2 = 42
    this.var3 = true
  }

  ngOnInit(): void {
  }

}
