import { Ingredient } from "../shared/ingredians-module"

export class ShopListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Ketchup', 2),
        new Ingredient('Apple', 5),
        new Ingredient('Mayo', 1)
    ]

    getAllIngrediants() {
        return this.ingredients
    }

    addIngrediante(ingr: Ingredient) {
        this.ingredients.push(ingr)
    }

    addIngrToShopList(ingr: Ingredient[]) {
        this.ingredients.push(...ingr)
    }
}