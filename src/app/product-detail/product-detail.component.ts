import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
 constructor(private route: ActivatedRoute){
 }
 id = Number(this.route.snapshot.paramMap.get('id'));
}
