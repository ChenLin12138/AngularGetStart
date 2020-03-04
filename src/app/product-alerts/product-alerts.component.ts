import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';

//表明他下面的类是一个组件,定义模板，样式
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

//定义导出类
export class ProductAlertsComponent implements OnInit {
  
  //@Input装饰器指出值是从该组件的父组件商品列表中传入的
  @Input() product;
  
  //定义一个基于EventEmitter的事件发射器，让这个商品提醒组件
  //在notify属性发生变化时发出事件。
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}