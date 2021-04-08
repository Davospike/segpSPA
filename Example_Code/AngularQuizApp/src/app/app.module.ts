import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartsModule} from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SocialComponent } from './social/social.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

// const appRoutes: Routes = [
//   { path: 'welcome', component: WelcomePageComponent },
//   { path: 'quiz', component: QuizComponent },
//   { path: 'stats', component: StatisticsComponent },
//   { path: 'bar-chart', component: BarChartComponent},
//   { path: '**', component: WelcomePageComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    WelcomePageComponent,
    ToolbarComponent,
    StatisticsComponent,
    SocialComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ChartsModule
  ],
  // exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
