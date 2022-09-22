import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RegisterService {
    private Userdata : any[] = [{'email':'anisa22@gmail.com'},{'password':'anisa22may'}]
    Accessstatus = false
    GetUser = (mail : String,pass : String) => {
        console.log(mail,pass)
        if(this.Userdata.find(e => e.email === mail) && this.Userdata.find(e => e.password === pass))
          this.Accessstatus = true
        else
          this.Accessstatus = false
        return this.Accessstatus
      }
    
}