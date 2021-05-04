import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { QuizComponent } from './quiz/quiz.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopicsComponent } from './topics/topics.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
      .then(() => {
          fixture = TestBed.createComponent(AppComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
      });
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // TODO: This test needs an h1 element in app component to work. If there isn't going to be an h1
  //  element, this test can be deleted.
  //
  // it('should render title in a h1 tag', async(() => {
  //   const compiled = fixture.debugElement.query(By.css('h1'));
  //   expect(compiled.nativeElement.textContent).toContain('Would they lie to you? Fake news education');
  // }));
});
