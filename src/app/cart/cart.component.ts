import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
//引入表单
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  //通过构造函数注入组件
  constructor(private cartService : CartService, private formBuilder : FormBuilder) { 
    //通过FormBuilder.group()构建一个表单模型
    this.checkoutForm = this.formBuilder.group({
      name : '',
      address : ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    console.warn('Your order has been submitted', customerData);
    //结账后清空购物车和表单。
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
