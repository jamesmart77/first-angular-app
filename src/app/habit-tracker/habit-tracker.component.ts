import { Component } from '@angular/core';

@Component({
  selector: 'app-habit-tracker',
  template: `
    <h1>{{title}}</h1>
    <app-habit-list></app-habit-list>
  `,
  styles: [`h1 {
    color: navy;
  }`]
})
export class HabitTrackerComponent {
  title = 'Habit Tracker';
}
