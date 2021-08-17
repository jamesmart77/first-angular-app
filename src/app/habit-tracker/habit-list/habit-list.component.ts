import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map, switchMap} from 'rxjs/operators';
import {HabitService} from "../habit.service";
import {Habit} from "../habit";

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <!-- pipe tells angular this is an observable and it'll manage subscribing and unsubscribing automatically -->
      <app-habit-item
        *ngFor="let habit of habits | async"
        [habit]="habit">
      </app-habit-item>
    </ul>
  `,
  styles: [
  ]
})

export class HabitListComponent implements OnInit {
  habits: Observable<Habit[]> | undefined;
  
  constructor(private habitService: HabitService) {}
  
  ngOnInit(): void {
    this.habits = this.habitService.reFetch.pipe(
      switchMap(() => this.habitService.getHabits())
    );
  }

  onAddHabit(newHabit:Habit) {
    if (!newHabit.title) {
      alert('Must provide value to add item');
      return
    }
    
    this.habitService.addHabit(newHabit).subscribe();
  }
}
