import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-tracker/habit-list/habit-list.component';
import { HabitDetailsComponent } from './habit-tracker/habit-details/habit-details.component';
import { HabitItemComponent } from './habit-tracker/habit-item/habit-item.component';
import { HabitFormComponent } from './habit-tracker/habit-form/habit-form.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account/:id', component: AccountDetailComponent },
  { path: 'habitTracker', component: HabitTrackerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitDetailsComponent,
    HabitItemComponent,
    HabitFormComponent,
    HomeComponent,
    AccountComponent,
    HabitTrackerComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
