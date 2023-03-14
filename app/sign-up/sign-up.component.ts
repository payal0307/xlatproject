import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcomService } from '../ecom.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup ; 

constructor(private formBuilder:FormBuilder,private service:EcomService ,private router:Router ){}

ngOnInit() {
  this.registerForm=this.formBuilder.group({
    email: ['', [Validators.required,Validators.email]],
    firstName: ['',Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    password:['',Validators.required]
  });
}

registerform=new FormGroup({
  'firstName':new FormControl("")
});
// registerSubmited(){
//   window.alert('Registration Successfully');
// }
register(){
  this.service.register(this.registerForm.value).subscribe({
    next(value) {
      console.log(value);
      
    },
  })
  this.router.navigate(['/signin']);

}
}
