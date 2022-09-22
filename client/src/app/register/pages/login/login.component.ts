import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }
  
  onroute = () => {
    this._route.navigate(['../signup'])
    console.log(this._route.url)
  }
}
