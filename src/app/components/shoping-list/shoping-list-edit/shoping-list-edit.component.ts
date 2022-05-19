import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredians-module';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css']
})
export class ShopingListEditComponent implements OnInit {
@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef
@ViewChild('amountInput', {static: false }) amountInputRef: ElementRef
@Output() addIngridiant = new EventEmitter<Ingredient>()

  onAddIngredient(){
    const ingrName = this.nameInputRef.nativeElement.value
    const ingrAmout = this.amountInputRef.nativeElement.value
    const ingr = new Ingredient(ingrName,ingrAmout)
    this.addIngridiant.emit(ingr)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
