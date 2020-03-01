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
  userRoleId: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) { }


  getUser(passedusername:string, passedpassword:string): Promise<UserData> {
    const body: LoginBody = {
      username: passedusername,
      password: passedpassword

    } as LoginBody;
    console.log("content of body(LoginBody interface instance) is: " + body.username +"  " + body.password);
    
    const url = `http://localhost:8080/ERS/LogInServlet`;

    return this.httpClient.post<UserData>(url, body).toPromise();
  }
}
