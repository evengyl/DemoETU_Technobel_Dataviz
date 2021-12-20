import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html'
})
export class Demo10Component implements OnInit {

  /* input */
  messageParent : string = undefined
  classParent : string = undefined

  /* output */
  messageByEnfant : string = undefined

  constructor() {
    this.messageParent = "En vrai je suis peux être dans un compo enfant mais je suis déclarer dans un parent (demo10)"
    this.classParent = "alert alert-success"
  }

  ngOnInit(): void {
  }

  changeClass() : void
  {
    if(this.classParent == "alert alert-success")
      this.classParent = "alert alert-danger"
    else
      this.classParent = "alert alert-success"
  }


  onParent(message)
  {
    this.messageByEnfant = message
  }
}
