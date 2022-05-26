import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopingListComponent } from './components/shoping-list/shoping-list.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ShopingListEditComponent } from './components/shoping-list/shoping-list-edit/shoping-list-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownDirective } from './components/shared/dropdown-directive';
import { ShopListService } from './components/shoping-list/shop-list-service';
import { RecipeStartComponent } from './components/recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipe-book/recipe-edit/recipe-edit.component';
import { RecipeService } from './components/recipe-book/recipe-service';

@NgModule({
  declarations: [
    AppComponent,
    ShopingListComponent,
    RecipeBookComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopingListEditComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShopListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
