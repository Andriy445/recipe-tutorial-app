import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipe-book/recipe.model";
import { Ingredient } from "../shared/ingredians-module";
import { ShopListService } from "../shoping-list/shop-list-service";


@Injectable()
export class RecipeService {
    constructor(private ShopListService: ShopListService) { }
    recipeChanged = new Subject<Recipe[]>()
   
    private recipies: Recipe[] = [
        new Recipe(
            'First Recipe',
            'Description',
            'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
            [
                new Ingredient('Meat', 10),
                new Ingredient('Water',2)
            ]
        ),
        new Recipe(
            'Second Recipe',
            'Description',
            'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
            [
                new Ingredient('Tomato', 5)
            ]
        ),
    ];

    getAllRecipies() {
        return this.recipies.slice()
    }

    addIngrediantsToSl(ingr: Ingredient[]) {
        this.ShopListService.addIngrToShopList(ingr)
    }

    getOneRecipe(id: number){
        return this.recipies[id]
    }

    addRecipe(recipe: Recipe){
        this.recipies.push(recipe)
        this.recipeChanged.next(this.recipies.slice())
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipies[index] = recipe
        this.recipeChanged.next(this.recipies.slice())
    }

    deleteRecipe(id: number){
        this.recipies.splice(id,1)
        this.recipeChanged.next(this.recipies.slice())
    }
}