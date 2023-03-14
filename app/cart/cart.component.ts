import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public product:any=[];
  public grandtotal !:number;
  constructor(private cartService:CartService){}
  ngOnInit(){
    this.cartService.getproducts()
    .subscribe(res=>{
      this.product=res;
      this.grandtotal=this.cartService.gettotalprice();
    })
  }
  removeitem(item:any){
    this.cartService.removecartitem(item);
  }
  emptycart(){
    this.cartService.removeallcart();
  }
  
}
