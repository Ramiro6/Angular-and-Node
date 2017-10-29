import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ColorClickDirective implements OnInit {
  @Input('appResaltar') plan: string = '';

  constructor( private _ref: ElementRef,
               private _render: Renderer2 ) { }
  ngOnInit() {
    console.log(this.plan);

    if (this.plan === 'pagado') {
      this._render.setStyle(this._ref.nativeElement, 'background-color', 'yellow');
      this._render.setStyle(this._ref.nativeElement, 'font-weight', 'bold');
    }

  }

}
