import { Component, OnInit } from '@angular/core';
import { Reimbursement } from './reimbursement';
import { LoginServiceService, UserData } from 'src/app/Services/login-service.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../login/user';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  selectedValue:string = '';
   pending = 'PENDING';
    approved = 'APPROVED';
    rejected = 'REJECTED';





  public reimbursement: Reimbursement = new Reimbursement();
  constructor(private httpClient: HttpClient, private loginService:LoginServiceService) { 
    console.log("User role Id tracked in manager component:" + this.loginService.getCurrentUser().firstName);
  }

  getByStatus(statusType: any){
    const url = `http://localhost:8080/ERS/ManagerServlet?statusType=${this.selectedValue}`;
    this.httpClient.get(url);
  }



  ngOnInit(): void {
  }

}
