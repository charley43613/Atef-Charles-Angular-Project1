import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: String = 'guest';
  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    this.username = 'loggedout';
  }

}
