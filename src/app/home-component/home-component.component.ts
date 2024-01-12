import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductComponentComponent } from '../product-component/product-component.component';
import { SlideComponentComponent } from '../slide-component/slide-component.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [ProductComponentComponent,SlideComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
