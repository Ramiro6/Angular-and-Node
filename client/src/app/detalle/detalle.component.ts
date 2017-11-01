import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  private id: number = null;
  private lugar: any = {};

  public muck = [
    { id: 1, lugar: 'Roma', plan: 'pagado', description: 'hsahashhajshjashjsahjasddkjhshjsdhjdshjsdsdhj' },
    { id: 2, lugar: 'Madrid', plan: 'no pagado', description: 'hsahashhajshjashjsahjasddkjhshjsdhjdshjsdsdhj' },
    { id: 3, lugar: 'Paris', plan: 'pagado', description: 'hsahashhajshjashjsahjasddkjhshjsdhjdshjsdsdhj' },
    { id: 4, lugar: 'Irlanda', plan: 'no pagado', description: 'hsahashhajshjashjsahjasddkjhshjsdhjdshjsdsdhj' }
  ];

  constructor( private _router: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.lugar = this.findCity();
    console.log(this.findCity());
  }

  findCity() {
    return this.muck.filter( res => {
      return res.id == this.id;
    })[0];
  }

}
