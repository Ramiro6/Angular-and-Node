import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public muck = [
    { lugar: 'Roma', plan: 'pagado' },
    { lugar: 'Madrid', plan: 'no pagado' },
    { lugar: 'Paris', plan: 'pagado' },
    { lugar: 'Irlanda', plan: 'no pagado' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
