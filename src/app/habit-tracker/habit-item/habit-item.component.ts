import {Component, Input} from '@angular/core';
import {Habit} from "../habit";

@Component({
  selector: 'app-habit-item',
  template: `
    <li [style.color]="habit?.streak ? 'red' : 'black'">
      {{ habit?.title }} (Count: {{ habit?.count }})
    </li>
  `,
  styles: [
  ]
})
export class HabitItemComponent {
  @Input() habit: Habit | undefined;

  constructor() { }
}
