import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <h2>Foods:
      <small>
        <select (change)="filterFoods($event.target.value)" class='pull-right'>
          <option value='all'>Show All</option>
          <option value='low'>Show Low-calorie</option>
          <option value='high'>Show High-calorie</option>
        </select>
      </small>
    </h2>
    <div *ngFor="let food of childFoodsList | foodFilter:foodPick">
      <p (click)="clickedFood(food)">{{food.name}}({{food.calories}})- {{food.details}}</p>
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodsList: Food[];
  @Output() clickedFoodSender = new EventEmitter();
  public foodPick = 'all';
  clickedFood(food:Food){
    this.clickedFoodSender.emit(food);
  }
  filterFoods(selection) {
    this.foodPick = selection;
  }
}
