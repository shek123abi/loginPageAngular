import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'dashboard',component:DashboardComponent},
   {path:'',redirectTo:'/signup',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
