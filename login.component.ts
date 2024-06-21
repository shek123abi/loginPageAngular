import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(){}
  ngOnInit():void{
     this.login=new FormGroup({
        Email:new FormControl("",[Validators.required,Validators.email]),
        Password:new FormControl("",[Validators.required,Validators.minLength(6)]),
     })
  }
  login:FormGroup|any;
  loginpage(){
      if(this.login.valid){
         console.log("Form Submitted",this.login.value);
        }
       else{
        console.log("Form was invalid");
        
       }        
    
  }
  get Email(){
    return this.login.get('Email')
  }
  get Password(){
    return this.login.get('Password')
  }
}
