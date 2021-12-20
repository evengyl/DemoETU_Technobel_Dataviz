import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output10',
  templateUrl: './output10.component.html'
})
export class Output10Component implements OnInit {

  @Output() enterChildren : EventEmitter<string> = new EventEmitter<string>()
  @Output() leaveChildren : EventEmitter<string> = new EventEmitter<string>()

  messageEnfant1 : string = undefined
  messageEnfant2 : string = undefined

  constructor() {
    this.messageEnfant1 = "Je rentre la souris dans le composant enfant"
    this.messageEnfant2 = "Je sors la souris de mon composant enfant"
  }
  

  ngOnInit(): void {
  }

  onEnter() : void{
    this.enterChildren.emit(this.messageEnfant1)
  }

  onLeave() : void{
    this.leaveChildren.emit(this.messageEnfant2)
  }

}
