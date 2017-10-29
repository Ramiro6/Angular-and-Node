import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

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
