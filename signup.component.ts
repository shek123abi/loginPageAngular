import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(){}

  ngOnInit():void{
       this.signup=new FormGroup({
        Fname:new FormControl('',Validators.required),
        Lname:new FormControl('',Validators.required),
        Email:new FormControl('',[Validators.required,Validators.email]),
        Phone:new FormControl('',Validators.required),
        Password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
       })
  }

  get Fname(){
   return  this.signup.get('Fname')
  }
  get Lname(){
    return this.signup.get('Lname')
  }
  get Email(){
    return this.signup.get('Email')
  }
  get Phone(){
    return this.signup.get('Phone')
  }
  get Password(){
    return this.signup.get('Password')
  }
  signup:FormGroup|any;
  Signup(){
     if(this.signup.valid){
      console.log("Form Submitted",this.signup.value);
     }
     else{
        console.log("Form is invalid");
        
     }
     }
}
