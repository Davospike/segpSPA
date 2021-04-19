import { Component } from '@angular/core';

import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <app-toolbar></app-toolbar>
    <div class="application-wrapper">
      <div class="toolbar-fix"></div>
      <div class="application-wrapper-inner">
        <router-outlet></router-outlet>
      </div>
      <app-social></app-social>
    </div>`
})
export class AppComponent {
}
