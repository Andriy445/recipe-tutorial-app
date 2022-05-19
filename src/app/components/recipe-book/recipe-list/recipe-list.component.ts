import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>()
 recipies: Recipe[] = [
    new Recipe(
      'First Recipie',
      'Description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
    new Recipe(
      'Second Recipie',
      'Description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
  ];
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
  constructor() {}

  ngOnInit(): void {}
}
