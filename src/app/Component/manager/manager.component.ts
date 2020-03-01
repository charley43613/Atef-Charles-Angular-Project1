import { Component, OnInit } from '@angular/core';
import { Reimbursement } from './reimbursement';
import { LoginServiceService, UserData } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {




  public reimbursement: Reimbursement = new Reimbursement();
  constructor(private loginService:LoginServiceService) { 
    console.log("User role Id tracked in manager component:" + this.loginService.getCurrentUser().firstName);
  }




  ngOnInit(): void {
  }

}
