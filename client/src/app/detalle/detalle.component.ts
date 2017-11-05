import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {  } from 'rxjs/Rx';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public id: number = null;
  public lugar: any = '';
  public database: any [] = [];

  constructor( private _router: ActivatedRoute,
               private _api: ServicesService ) {
               }

  ngOnInit() {
    this.id = this._router.snapshot.params['id'];

    this.findCity();
  }

  findCity() {
    this._api.getDetalle().subscribe( res => {
      this.database = res.item;
      return this.database.filter( item => {
        if (item._id == this.id) {
           this.lugar = item;
          console.log(this.lugar);
        }
           })[0];
    });

    // return this.database.filter( item => {
    //       return item.id == this.id;
    //    })[0];
  }

}
