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
   
   

  public user: User = new User();
  public role = this.user.roleId;

  log(val) { console.log(val); }
    constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {

  }
  async login(username,password) {
    const result: UserData = await this.loginService.getUser(username, password);

    this.userData.userID = result.userID;
    this.userData.userName = result.userName;
    this.userData.firstName = result.firstName;
    this.userData.lastName = result.lastName;
    this.userData.email = result.email;
    this.userData.userRoleId = result.userRoleId;
    // Clear current input value

    this.route = this.loginClicked(this.userData.userRoleId);


  }
  private loginClicked(roleId: number): string{
    console.log("user id is: ");
    console.log(this.user.roleId);
    if (this.user.roleId == 1) {
      return 'manager';
    } else if(this.user.roleId == 2) {
      return 'user';
    } else{
      return '';
    }
  }

}
