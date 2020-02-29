import { User } from './user';
import { Component, OnInit, NgModule } from '@angular/core';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
   public output: String;

   
   

  public user: User = new User();
  public role = this.user.roleId;

  log(val) { console.log(val); }
    constructor() { }

  ngOnInit(): void {
  



  }
  loginClicked() {
    
    console.log("user id is: ");
    console.log(this.user.roleId);
    if (this.user.roleId == 1) {
      this.output= "manager";
    } else if(this.user.roleId == 2) {
      this.output = "user";
    } else{
      this.output =  "";
    }
  }

}
