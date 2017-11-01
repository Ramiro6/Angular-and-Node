import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  newForm(forma: NgForm ) {
    console.log('sksksk');
    console.log(this.new);
  }

}
