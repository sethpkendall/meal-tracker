import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list.component';
import { LogFoodComponent } from './log-food.component';
import { FoodFilterPipe } from './foodFilter.pipe';
import { FoodInfoComponent } from './food-info.component';


@NgModule({
  imports: [BrowserModule],
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
