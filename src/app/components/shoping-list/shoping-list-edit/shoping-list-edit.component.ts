import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredians-module';
import { ShopListService } from '../shop-list-service';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css']
})
export class ShopingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef

  constructor(private ShopListService: ShopListService) { }
  onAddIngredient() {
    const ingrName = this.nameInputRef.nativeElement.value
    const ingrAmout = this.amountInputRef.nativeElement.value
    const ingr = new Ingredient(ingrName, ingrAmout)
    this.ShopListService.addIngrediante(ingr)
  }


  ngOnInit(): void {
  }

}
