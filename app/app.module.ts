import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { MidpartComponent } from './midpart/midpart.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy,PathLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FooterComponent,
    MidpartComponent,
    HomeComponent,
    ContactComponent,
    SignUpComponent,
    SingInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [
       {provide:LocationStrategy,useClass:PathLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
