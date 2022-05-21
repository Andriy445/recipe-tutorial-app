import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  id: number
  constructor(private RecipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  onAddToShopingList() {
    this.RecipeService.addIngrediantsToSl(this.recipe.ingredients)
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.recipe = this.RecipeService.getOneRecipe(this.id)
    })
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
