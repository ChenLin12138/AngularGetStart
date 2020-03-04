import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Service是一个单例，但是页面刷新了会重置
//其实这里是申明它是一个可以被注入的组件，有点像Java的@Component
//购物车保管订单信息
@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor(private http : HttpClient) { }

  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
  
  //通过http请求，实际是在本地，或者物流价格信息
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}
