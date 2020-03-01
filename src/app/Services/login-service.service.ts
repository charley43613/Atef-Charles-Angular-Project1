import { User } from './../Component/login/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export interface userData{

}
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  getUser(usernmae, password){
      return this.HttpClient.Post
  }
}
