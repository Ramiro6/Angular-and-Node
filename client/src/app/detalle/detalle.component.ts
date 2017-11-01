import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public id: number = null;
  public lugar: any = {};

  constructor( private _router: ActivatedRoute,
               private _api: ServicesService ) { }

  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.lugar = this.findCity();
    console.log(this.findCity());
  }

  findCity() {
    return this._api.getDb().filter( res => {
      return res.id == this.id;
    })[0];
  }

}
