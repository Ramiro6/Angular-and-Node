import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public muck = [
    { id: 1, lugar: 'Roma', plan: 'pagado' },
    { id: 2, lugar: 'Madrid', plan: 'no pagado' },
    { id: 3, lugar: 'Paris', plan: 'pagado' },
    { id: 4, lugar: 'Irlanda', plan: 'no pagado' }
  ];


  constructor( private routes: ActivatedRoute) {
    console.log(this.routes.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
