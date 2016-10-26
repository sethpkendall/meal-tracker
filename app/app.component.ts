import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector:'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div class='row'>
      <div class='col-xs-6'>
      <food-list [testFoods]></food-list>
      </div>
    </div>
  `
})

export class AppComponent{
  public testFoods: food[] = [
    new Food('Fries', 500, "Nice and greasy"),
    new Food('Carrots with Ranch', 200, "Healthy and boring with a compromise"),
    new Food('Southwest Salad', 400, "Lettuce, black beans, tortilla strips, corn and cilantro dressing with chicken on top (grilled)")
  ];
}
