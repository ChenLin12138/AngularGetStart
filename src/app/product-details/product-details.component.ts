import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : any;

  //ActivatedRoute注入构造函数，专门用于Angular路由器加载组件。
  //将cartService通过构造函数注入product-details类
  constructor(private route : ActivatedRoute, private cartService : CartService) {}

  //构造函数中订阅路由参数，从products[]中获取product
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product){
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
  }

}
