import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveFont]'
})
export class DirectiveFontDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '20px')
   }

}
