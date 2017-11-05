import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class ServicesService {

  private getUrl: string = 'http://localhost:3000/api';

  private postUrl: string = 'http://localhost:3000/api/new';

  constructor( private http: Http ) { }
  getDb() {
    return this.http.get(this.getUrl)
             .map( res => {
               return res.json();
             });
  }

  getDetalle() {
    return this.http.get(this.getUrl)
     .map( res => {
        return res.json();
     });
  }

  postNew( Newpost ) {
    console.log('services');
    // console.log(Newpost);
    let headers = new Headers({'Content-Type': 'application/json'});

    console.log('queeee');
    console.log(headers);

    // let body = `name=${termino}`;

    console.log(Newpost);

    return this.http.post(this.postUrl, Newpost, { headers })
                    .map((res: Response) => {
                      return res.json();
                    });
  }
}
