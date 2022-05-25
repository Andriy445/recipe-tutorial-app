import { Ingredient } from "../shared/ingredians-module"
import { Subject } from "rxjs"

export class ShopListService {
    startedEditing = new Subject<number>()
    ingredientChanged = new Subject<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Ketchup', 2),
        new Ingredient('Apple', 5),
        new Ingredient('Mayo', 1)
    ]

    getAllIngrediants() {
        return this.ingredients
    }
    getIngrediante(index: number){
        return this.ingredients[index]
    }

    addIngrediante(ingr: Ingredient) {
        this.ingredients.push(ingr)
        this.ingredientChanged.next(this.ingredients.slice())
    }

    addIngrToShopList(ingr: Ingredient[]) {
        this.ingredients.push(...ingr)
        this.ingredientChanged.next(this.ingredients.slice())
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient
        this.ingredientChanged.next(this.ingredients.slice())
    }

    deleteIngredient(index){
        this.ingredients.splice(index, 1)
        this.ingredientChanged.next(this.ingredients.slice())
    }
}