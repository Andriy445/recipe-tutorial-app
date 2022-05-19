import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredians-module';
import { ShopListService } from './shop-list-service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  constructor(private shopingListService: ShopListService) { }
  ingredients: Ingredient[] = []


  ngOnInit(): void {
    this.ingredients = this.shopingListService.getAllIngrediants()
  }

  

}
