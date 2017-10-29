import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appWidth]'
})
export class WidthDirective {

  constructor() { }

  @HostListener('window:resize', ['$event']) onResize(event) {
    // console.log(event.target.innerWidth);
    if (event.target.innerWidth <= 992) {
      // console.log('test');
    }
  }
}

