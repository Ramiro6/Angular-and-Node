import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'h4[appSaveClicks]'
})
export class SaveClicksDirective {
  click = 0;
  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click', ['$event.target']) onclick(btn) {
    console.log('a', btn, 'Click is save:', this.click++);
    this.opacity += 1;
  }
  constructor() { }

}
