import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredians-module';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Ketchup', 2),
    new Ingredient('Apple', 5),
    new Ingredient('Mayo', 1)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onIngrediantAdded(ingr: Ingredient){
    console.log(1)
    this.ingredients.push(ingr)
  }

}
