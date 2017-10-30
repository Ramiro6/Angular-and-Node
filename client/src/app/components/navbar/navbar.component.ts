import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  public changeNavbar = true;

  constructor() { }

  ngOnInit() {
  }
onResize(event) {
    if (event.target.innerWidth >= 992 ) {
      return this.changeNavbar = false;
    } else {
      return this.changeNavbar = true;
    }
  }

}
