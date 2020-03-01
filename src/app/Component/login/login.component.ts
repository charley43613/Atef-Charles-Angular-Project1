import { UserData, LoginServiceService } from './../../Services/login-service.service';
import { User } from './user';
import { Component, OnInit, NgModule } from '@angular/core';




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
    constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {

  }
  async login() {
    const result: UserData = await this.loginService.getUser(this.username, this.password);

    this.userData.userID = result.userID;
    this.userData.userName = result.userName;
    this.userData.firstName = result.firstName;
    this.userData.lastName = result.lastName;
    this.userData.email = result.email;
    this.userData.userRoleId = result.userRoleId;
    // Clear current input value

    this.route = this.loginClicked(this.userData.userRoleId);

    console.log("The user's data tracked by the login component is: email:" + this.userData.email);
    console.log(" RoleId:" + this.userData.userRoleId + "ETC...");

  }
  private loginClicked(roleId: number): string{
    console.log("user role id is: ");
    console.log(this.userData.userRoleId);
    if (this.userData.userRoleId == 1) {
      return 'manager';
    } else if(this.userData.userRoleId == 2) {
      return 'user';
    } else{
      return '';
    }
  }

}
