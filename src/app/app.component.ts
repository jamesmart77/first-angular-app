import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nav>
        <ul>
          <li><a routerLink="/home">Home</a></li>
          <li><a routerLink="/account">Account</a></li>
          <li><a routerLink="/habitTracker">Habit Tracker</a></li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`h1 {
    color: navy;
  }`]
})
export class AppComponent {
  
}
