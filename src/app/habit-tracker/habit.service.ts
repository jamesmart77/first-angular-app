import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {Habit} from "./habit";
import {HttpClient} from "@angular/common/http";
import {tap, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  // Subject is a multi-event listener
  private reFetchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  get reFetch() {
    // prevent overwriting of subject 
    return this.reFetchSubject.asObservable();
  }

  // change habits array to an 'observable'
  getHabits(): Observable<Habit[]> {
    return this.http
      .get<Habit[]>("/api/habits")
      .pipe(map(habits => {
        return habits.map(habit => {
          habit.streak = habit.count > 5;
          return habit;
        })
      }));
  }

  addHabit(newHabit: any) {
    return this.http
      .post<Habit>('/api/habits', newHabit)
      .pipe(map(data => console.log("Response: ", data)))
      .pipe(tap(() => this.reFetchSubject.next(null)));
  }
}
