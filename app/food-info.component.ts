import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: "food-info",
  template:`
    <div *ngIf="clickedFood">
      <h2>{{}}</h2>
  `
})

export class FoodInfoComponent
