import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { QuizComponent } from './quiz/quiz.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopicsComponent } from './topics/topics.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Would they lie to you? Fake news education');
  }));
});

@Component({
  selector: 'app-toolbar', 
  template: ''
})
class MockToolbarComponent {
}
