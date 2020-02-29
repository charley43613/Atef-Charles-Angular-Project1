import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { ManagerComponent } from './Component/manager/manager.component';
import { UserComponent } from './Component/user/user.component';


const routes: Routes = [{
  component: LoginComponent,
  path: ''
 }, {
  component: ManagerComponent,
  path: 'manager'
}, {
  component: UserComponent,
  path: 'user'
}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
