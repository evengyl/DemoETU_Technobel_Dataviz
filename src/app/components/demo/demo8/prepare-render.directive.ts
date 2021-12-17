import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPrepareRender]'
})
export class PrepareRenderDirective {

  constructor(private el : ElementRef) {

    this.el.nativeElement.style.color = "red"
    this.el.nativeElement.style.fontSize = "18px"
    this.el.nativeElement.style.backgroundColor = "yellow"
  }

}
