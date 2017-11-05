import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  public database: any[] = [];
  constructor( private routes: ActivatedRoute,
               private _api: ServicesService ) {
    console.log(this.routes.snapshot.params['id']);
  }

  ngOnInit() {
    this._api.getDb().subscribe( res => {
      this.database = res.item;
    });
  }

}
