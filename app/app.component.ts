import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector:'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div class='row'>
      <div class='col-xs-6'>
        <log-food
            (newFoodSender)="addFood($event)"
          ></log-food>
        <food-list
          [childFoodsList]="foodList"
          (clickedFoodSender)="showInfo($event)"
          ></food-list>
      </div>
      <div class='col-xs-6'>
        <food-info
            [clickedFood]="clickedFood"
      </div>
    </div>
  `
})

export class AppComponent{
  public foodList: Food[] = [
    new Food('Fries', 501, "Nice and greasy"),
    new Food('Carrots with Ranch', 200, "Healthy and boring with a compromise"),
    new Food('Southwest Salad', 400, "Lettuce, black beans, tortilla strips, corn and cilantro dressing with chicken on top (grilled)")
  ];

  addFood(loggedFood: Food) {
    this.foodList.push(loggedFood);
  }
  clickedFood:Food = null;
  showInfo(infoToShow:Food){
    this.clickedFood = infoToShow;
  }
}
