import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  constructor(private _route: Router,private _registerservice: RegisterService,private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit = () => {
    console.log(this.signinForm);
    if(this._registerservice.GetUser(this.signinForm.value.email!,this.signinForm.value.password!)){
      this._snackbar.open("Signed in successfully","close",{
        duration:2000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['green-snackbar']
      })
      this._route.navigate(['/home'])
    }
    else{
        this._snackbar.open("Invalid Credentials","close",{
          duration:2000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: ['red-snackbar']
          
        })
    }
  }

}
