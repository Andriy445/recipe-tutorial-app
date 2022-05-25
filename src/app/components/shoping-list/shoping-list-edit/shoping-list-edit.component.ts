import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredians-module';
import { ShopListService } from '../shop-list-service';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css']
})
export class ShopingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: false }) 'slForm': NgForm
 private subscription: Subscription
  editMode = false
  editedItemIndex: number
  edititem: Ingredient

  constructor(private slService: ShopListService) { }
  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index
      this.editMode = true
      this.edititem = this.slService.getIngrediante(this.editedItemIndex)
      this.slForm.setValue({
        name: this.edititem.name,
        amount: this.edititem.amount
      })
    })
  }

  onAddIngredient(form: NgForm) {
    const value = form.value
    const ingr = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, ingr)
    } else {
      this.slService.addIngrediante(ingr)
    }
    
    form.reset()
  }
  onClearForm(){
    this.slForm.reset()
    this.editMode = false
  }

  onDeleteItem(){
    this.slService.deleteIngredient(this.editedItemIndex)
    this.onClearForm()
  }
 


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}


