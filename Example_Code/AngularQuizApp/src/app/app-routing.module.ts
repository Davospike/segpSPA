import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {QuizComponent} from './quiz/quiz.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {TopicsComponent} from './topics/topics.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'topics', component: TopicsComponent },
  // No longer need stats component as can direct from bar-chart
  // { path: 'stats', component: StatisticsComponent },
  { path: 'bar-chart', component: BarChartComponent},
  { path: '**', component: WelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
