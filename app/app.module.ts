import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list.component';
import { LogFoodComponent } from './log-food.component';
import { FoodFilterPipe } from './foodFilter.pipe';
import { FoodInfoComponent } from './food-info.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FoodListComponent,
    LogFoodComponent,
    FoodFilterPipe,
    FoodInfoComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
