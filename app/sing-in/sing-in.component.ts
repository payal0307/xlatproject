import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl ,Validators} from '@angular/forms';
import {  Router } from '@angular/router';
import { EcomService } from '../ecom.service';



@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  
  loginForm!: FormGroup;
  emsg:any;
constructor(private formBuilder: FormBuilder,private service:EcomService ,private router:Router){}
  // showlogin()
  // {
  //   if(this.email.trim().length ===0)
  //   {
  //     this.emsg="password required";
  //   }else{
  //     this.emsg="";
  //     let res=this.auth.showlogin(this.email,this.password);
  //     if(res === 200){
  //       this.router.navigate(['/home']);
  //     }
  //     if(res===403){
  //       this.emsg =" invalid";
  //     }
  //   }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password:['',Validators.required]

    });
  }
 
  showlogin()
  {
    this.service.login(this.loginForm.value).subscribe({
      next(value) {
        console.log(value);
        alert("hii");
      },
    })
    this.router.navigate(['/products']);
  
}
}
