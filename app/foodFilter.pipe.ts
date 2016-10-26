import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "foodFilter",
  pure: false
})

export class FoodFilterPipe implements PipeTransform {
  transform (input: Food[], pick) {
    var output: Food[] = [];
    if (pick === "low") {
      for (var i = 0; i<input.length; i++) {
        if(input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (pick === "high") {
      for (var i = 0; i<input.length; i++) {
        if(input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
