import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  showlogin(uname:String,pass:String)
  {
    if(uname=="user1" && pass=="pass123"){
      window.alert('Login Successfully');
      return 200;
    }else{
      return 403;
    }
  }
}
