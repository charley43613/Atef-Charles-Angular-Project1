import {  LoginServiceService } from './../../Services/login-service.service';
import { User } from './user';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userData = {
    userID: null,
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    userRoleId: null


  };


   public route: String;
   username = '';
   password ='';
  

   
   




  log(val) { console.log(val); }
    constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit(): void {

  }
  login() {
    this.loginService.getUser(this.username, this.password)
    .subscribe(
      data => {

        this.loginService.setLoginServiceUser(data);
        if (this.loginService.getCurrentUser().userRoleId == 1){
          this.router.navigateByUrl("/manager");
        }
        else if(this.loginService.getCurrentUser().userRoleId == 2){
          this.router.navigateByUrl("/user");
        }
        else{
          this.router.navigateByUrl("");//go back to login
        }
    
      }             // this.location.replaceState('/home');
        
      )
    }
    // Clear current input value




  }



