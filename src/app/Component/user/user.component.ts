import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private loginService: LoginServiceService) {
    console.log("User role Id tracked in employee component:" + this.loginService.getCurrentUser().firstName);
   }

  ngOnInit(): void {
  }
  onFileChanged(event){
    const file = event.target.file[0];
  }

}
