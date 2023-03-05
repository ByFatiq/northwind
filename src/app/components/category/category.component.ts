import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  category = { categoryId: 1, categorytName: "Masa" }
  category2 = { categoryId: 2, categoryName:  "Masa"}
  category3 = { categoryId: 3, categoryName:  "Masa" }
  category4 = { categoryId: 4, categoryName:  "Masa" }
  category5 = { categoryId: 5, categoryName:  "Masa" }

  categories = [
    this.category,
    this.category2, 
    this.category3, 
    this.category4, 
    this.category5];


}
