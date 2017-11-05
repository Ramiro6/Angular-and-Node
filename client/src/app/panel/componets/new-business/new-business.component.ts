import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-new-business',
  templateUrl: './new-business.component.html',
  styleUrls: ['./new-business.component.css']
})
export class NewBusinessComponent implements OnInit {

  public new = {
    name: '',
    distancia: '',
    cercania: '',
    plan: '',
    description: ''
  };

  constructor( private _api: ServicesService ) { }

  ngOnInit() {
  }

  newForm(forma: NgForm ) {
    console.log();

    // let x = `name=${this.new.name}`;

    this._api.postNew( JSON.stringify(this.new ) ).subscribe( res => {
      console.log(res);
    });
  }

}
