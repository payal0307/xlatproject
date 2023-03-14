import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingInComponent } from './sing-in/sing-in.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"contact",component:ContactComponent},
  {path:"signup",component:SignUpComponent},
  {path:"signin",component:SingInComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
