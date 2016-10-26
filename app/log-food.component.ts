import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'log-food',
  template: `
    <h2>Log a Food</h2>
      <div class='form-group'>
        <input class='form-control' #nameHere placeholder="food name">
        <input class='form-control' #caloriesHere placeholder="food calories">
        <input class='form-control' #detailsHere placeholder="food details">
      </div>
      <div>
        <button (click)=
          "logFood(nameHere.value, caloriesHere.value, detailsHere.value);
          nameHere.value = '';
          caloriesHere.value = '';
          detailsHere.value='';
          " class="btn btn-primary">Add</button>
      </div>
  `
})

export class LogFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  logFood(name: string, calories: number, details: string) {
    var newLoggedFood: Food = new Food(name, calories, details);
    this.newFoodSender.emit(newLoggedFood);
  }
}
