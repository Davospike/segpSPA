import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {QuizComponent} from './quiz/quiz.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {TopicsComponent} from './topics/topics.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'about', component: StatisticsComponent },
  { path: '**', component: WelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
