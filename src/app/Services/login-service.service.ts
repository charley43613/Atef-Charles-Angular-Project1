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

  public userData:UserData = {
    userID: 0,
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    userRoleId: 0,

  }

  constructor(private httpClient: HttpClient) { }


  getUser(passedusername:string, passedpassword:string): Promise<UserData> {
    const body: LoginBody = {
      username: passedusername,
      password: passedpassword

    } as LoginBody;

    
    const url = `http://localhost:8080/ERS/LogInServlet`;

    return this.httpClient.post<UserData>(url, body).toPromise();
  }


}
