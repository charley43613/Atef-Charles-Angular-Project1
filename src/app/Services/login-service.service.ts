import { User } from './../Component/login/user';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginBody} from '../loginBody';

export interface UserData{
  userID: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  userRoleId: number;
}
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {



  constructor(private httpClient: HttpClient) { }

  public userData: UserData = {
    userID: 0,
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    userRoleId: 0,

  }

  getCurrentUser() {
    return this.userData;
  }
  // tslint:disable-next-line: align
  setLoginServiceUser(user: any) {
    this.userData.userID = user.UserID;
    this.userData.userName = user.userName;
    this.userData.firstName = user.firstName;
    this.userData.lastName = user.lastName;
    this.userData.email = user.email;
    this.userData.userRoleId = user.userRoleId;
 }


  getUser(passedusername:string, passedpassword:string) {
    const body: LoginBody = {
      username: passedusername,
      password: passedpassword

    } as LoginBody;

    
    const url = `http://localhost:8080/ERS/LogInServlet`;

    return this.httpClient.post(url, body);
  }


}
