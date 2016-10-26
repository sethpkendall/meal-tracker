import { Component, Input, Output } from '@angular/core';
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
            (editFormSender)="endEdit($event)"
            ></food-info>
      </div>
    </div>
  `
})

export class AppComponent{
  public foodList: Food[] = [];

  addFood(loggedFood: Food) {
    this.foodList.push(loggedFood);
  }
  clickedFood: Food = null;
  showInfo(infoToShow:Food){
    this.clickedFood = infoToShow;
  }
  endEdit(){
    this.clickedFood = null;
  }
}
