//import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{
  public productList:any;
  constructor(private api:ApiService,private cartService:CartService){}

  ngOnInit(){
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    })
  }
  // img21:string="assets/images/pr11.jpg";
  // img22:string="assets/images/pr14.jpg";
  // img23:string="assets/images/pr1.jpg";
  // img24:string="assets/images/pr2.jpg";
  // img25:string="assets/images/pr8.jpg";
  // img26:string="assets/images/pr9.jpg";



  addtocart(product: any) 
  {
    this.cartService.addtocart(product);
    window.alert('Your product has been added to the cart!');
  }
}
