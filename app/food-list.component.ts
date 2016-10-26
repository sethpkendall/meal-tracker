import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <h2>Foods:</h2>
    <div *ngFor="let food of childFoodsList">
      <p>{{food.name}}({{food.calories}})- {{food.details}}</p>
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodsList: Food[];

}
