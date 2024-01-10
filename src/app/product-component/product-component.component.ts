import { Component } from '@angular/core';
import {IProduct} from '../interface/product';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent {
    products: IProduct[]=[
        {
          id:1,
          image:'https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/d/a/dam-nu-22-10f23drew005_red_1__1_jpg.webp',
          title: 'Đầm Nữ Sát Nách Suông Cổ Thuyền Ngang Trơn Form Straight - 10F23DREW005',
          price:'883.000 ₫',
          sales: true
        },
        {
          id:2,
          image:'https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-jean-nu-13-10f23dpaw007-d-indigo-_1__1_1_jpg.webp',
          title: 'Quần Jean Nữ Ống Rộng Trơn Form Loose - 10F23DPAW007',
          price:'589.000 ₫',
          sales: false
        }
    ]
}
