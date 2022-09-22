import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({
    userEmail : new FormControl ('',[Validators.required,Validators.email]),
    userConfirmEmail : new FormControl ('',[Validators.required,Validators.email]),
    userName : new FormControl('',Validators.required),
    password : new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  constructor(private _route:Router,private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit = () => {
    console.log(this.signUpForm.value)
    if(this.signUpForm.value.userConfirmEmail === this.signUpForm.value.userEmail && this.signUpForm.valid){
      this._snackbar.open("Signed in successfully","close",{
        duration:2000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['green-snackbar']
   
      })
      this._route.navigate(["/register/login"])
    }
    else{
      this._snackbar.open("Incorrect data","close",{
        duration:2000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['red-snackbar']
        
      })
    }
  }

}
