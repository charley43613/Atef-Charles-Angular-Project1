import { Component, OnInit } from '@angular/core';
import { Reimbursement } from './reimbursement';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  public reimbursement: Reimbursement = new Reimbursement();
  constructor() { }

  ngOnInit(): void {
  }

}
