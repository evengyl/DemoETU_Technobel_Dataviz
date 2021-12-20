import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input10',
  templateUrl: './input10.component.html'
})
export class Input10Component implements OnInit {

  @Input()
  messageChildren : string

  @Input()
  classChildren : string

  constructor() { }

  ngOnInit(): void {
  }

}
