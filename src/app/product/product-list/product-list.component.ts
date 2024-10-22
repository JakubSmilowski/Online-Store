import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  
  products: Product[] = [];
  
  constructor(
    private productService: ProductService,
    private cartService: CartService

  ) {}
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {this.products = data}); //Here we are loading data to ProductService
  }

  addToCart(product: Product){
    this.cartService.addToCart(product).subscribe();
  }

}
