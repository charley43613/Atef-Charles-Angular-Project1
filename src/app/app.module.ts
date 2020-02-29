import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { UserComponent } from './Component/user/user.component';
import { ManagerComponent } from './Component/manager/manager.component';
import {FormsModule} from '@angular/forms';
import { ReimbursementViewComponent } from './Component/reimbursement-view/reimbursement-view.component';
import { HeaderComponent } from './Component/header/header.component';
import { ContentComponent } from './Component/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ManagerComponent,
    ReimbursementViewComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
