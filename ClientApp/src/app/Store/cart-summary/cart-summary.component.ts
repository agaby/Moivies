import { Component, OnInit } from '@angular/core';
import {Cart} from "../../models/cart.model";

@Component({
  selector: 'store-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cart: Cart) { }
  get itemCount(): number {
      console.log("The item count is: "+this.cart.itemCount);
      return this.cart.itemCount;
  }
  get totalPrice(): number {
    console.log("The Total Price is: "+this.cart.totalPrice);

      return this.cart.totalPrice;
  } 

  ngOnInit() {
  }

}
