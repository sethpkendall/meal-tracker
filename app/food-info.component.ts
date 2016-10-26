import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: "food-info",
  template:`
    <div *ngIf="clickedFood">
      <div class='form-group'>
        <input class='form-control' type='text' [(ngModel)]="clickedFood.name">
        <input class='form-control' type='number' [(ngModel)]="clickedFood.calories">
        <input class='form-control' type='text' [(ngModel)]="clickedFood.details">
      </div>
    </div>
  `
})

export class FoodInfoComponent{
  @Input() clickedFood:Food;
}
