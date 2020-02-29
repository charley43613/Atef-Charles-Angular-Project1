import { User } from './user';
import { Component, OnInit, NgModule } from '@angular/core';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user: User = new User();
public role = this.user.roleId;
log(val) { console.log(val); }
  constructor() { }

  ngOnInit(): void {
  }

}
