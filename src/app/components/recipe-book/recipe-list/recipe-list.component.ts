import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipeChangedSub: Subscription
constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

 onNewRecipe(){
  this.router.navigate(['new'], {relativeTo: this.route})
 }
 recipies: Recipe[] = [];
 
  ngOnInit(): void {
   this.recipies = this.recipeService.getAllRecipies()
   this.recipeChangedSub = this.recipeService.recipeChanged.subscribe((recipe: Recipe[])=>{
    this.recipies = recipe
   })
  }

  ngOnDestroy(): void {
    this.recipeChangedSub.unsubscribe()
  }
}
