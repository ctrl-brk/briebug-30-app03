import { Component, Input, Output, EventEmitter } from '@angular/core';
// @ts-ignore
import { Drink } from '@app/data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html'
})
export class DrinksListComponent {
  @Input() drinks: Drink[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
