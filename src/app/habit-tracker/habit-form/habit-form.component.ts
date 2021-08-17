import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-form',
  template: `
    <!--    [] mean input or binding -- () indicate and event or output-->
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <!--      formControlName binds to control group field-->
      <input type="text" placeholder="Add habit" formControlName="title"/>
      <button type="submit">Add</button>
    </form>
  `,
  styles: []
})
export class HabitFormComponent {

  habitForm: any; // form model
  @Output() addHabit = new EventEmitter<Habit>();

  constructor(private formBuilder: FormBuilder) {
    // create group of controls for form
    this.habitForm = this.formBuilder.group({
      // fields that form the form control
      title: '',
    })
  }

  onSubmit(newHabit: Habit) {
    this.addHabit.emit(newHabit); // pass the object up to the parent component
    this.habitForm.reset();
  }
}
