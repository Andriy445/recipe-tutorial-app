import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredians-module';
import { ShopListService } from './shop-list-service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
  private ingrChnageSub: Subscription
  ingredients: Ingredient[] = [
    new Ingredient('Ketchup', 2),
    new Ingredient('Apple', 5),
    new Ingredient('Mayo', 1)
  ]
  constructor(private slService: ShopListService) { }

  ngOnInit(): void {
     this.ingredients = this.slService.getAllIngrediants()
     this.ingrChnageSub = this.slService.ingredientChanged.subscribe((ingredients: Ingredient[])=>{
     this.ingredients = ingredients
    })
  }
  ngOnDestroy(): void {
    this.ingrChnageSub.unsubscribe()
  }
  onEditItem(index: number){
    this.slService.startedEditing.next(index)
    
  }
  

}
