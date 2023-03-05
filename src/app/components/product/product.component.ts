import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
title = 'Northwind uygulaması';
  user = "Fatih Ç.";
  product = { productId: 1, productName: 'Masa', categoryId: 2, unitPrice: 5, unitInStock:10 }
  product2 = { productId: 2, productName: 'Sandalye', categoryId: 2, unitPrice: 5, unitInStock:90 }
  product3 = { productId: 3, productName: 'Kamera', categoryId: 2, unitPrice: 5 , unitInStock:20}
  product4 = { productId: 4, productName: 'Tabak', categoryId: 2, unitPrice: 5 , unitInStock:30}
  product5 = { productId: 5, productName: 'Televizyon', categoryId: 2, unitPrice: 5, unitInStock:50 }

  products :Product[] = [
  this.product,
  this.product2, 
  this.product3, 
  this.product4, 
  this.product5

];

}
