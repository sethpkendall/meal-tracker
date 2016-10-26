import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: "food-info",
  template:`
    <div *ngIf="clickedFood">
      <h3>Edit Food</h3>
      <div class='form-group'>
        <input class='form-control' type='text' [(ngModel)]="clickedFood.name">
        <input class='form-control' type='number' [(ngModel)]="clickedFood.calories">
        <input class='form-control' type='text' [(ngModel)]="clickedFood.details">
        <button (click)="endEdit()">Done</button>
      </div>
    </div>
  `
})

export class FoodInfoComponent{
  @Input() clickedFood:Food;
  @Output() editFormSender = new EventEmitter();
  endEdit() {
    this.editFormSender.emit();
  }
}
