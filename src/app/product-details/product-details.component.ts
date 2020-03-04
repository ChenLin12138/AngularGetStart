import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : any;

  //ActivatedRoute注入构造函数，专门用于Angular路由器加载组件。
  constructor(private route : ActivatedRoute) {
    
   }

  //构造函数中订阅路由参数，从products[]中获取product
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
