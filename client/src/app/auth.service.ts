
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { RegisterService } from './register/register.service'
 
 
@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements CanActivate {
 
    constructor(private _registerservice : RegisterService, private _route: Router) {
    }
 
    canActivate(): boolean {
        if (!this._registerservice.Accessstatus)  {
            this._route.navigate(['/register/login'])
            return false
        }
        return true
    }
 
}
 