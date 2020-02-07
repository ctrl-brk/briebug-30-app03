import { Component, Output, EventEmitter, Input } from '@angular/core';
// @ts-ignore
import { Drink } from '@app/data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html'
})
export class DrinkDetailsComponent {
  currentDrink: Drink;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set drink(value) {
    if (value) this.originalTitle = value.title;
    this.currentDrink = Object.assign({}, value)
  }
}
