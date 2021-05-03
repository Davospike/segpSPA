/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { QuizComponent } from './quiz.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Option} from "../models";

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
  let html: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      // TODO: Instead of importing these, you could mock the services that are used in the
      //  constructor of QuizComponent, i.e.:
      //  constructor(
      //     private quizService: QuizService,
      //     private dataService: DataService,
      //     private route: ActivatedRoute
      //  ) { }
      //  to actually test the behaviour (i.e. checking if the respective functions of the services
      //  are bing called etc.).
      imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule ],
      declarations: [ QuizComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(QuizComponent);
      component = fixture.componentInstance;

      html = fixture.debugElement;
      fixture.detectChanges();
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should select the selected option', fakeAsync(() => {
    // Define a sample question to ensure that the `ngFor` renders the necessary option components.
    component.quiz.questions = [
      {
        id: '123',
        name: 'First question',
        articleBody: 'Article body.',
        articleURL: 'http://article.url/',
        debunkArticleUrl: 'http://debunk.article.url/',
        questionTypeId: 1,
        options: [{
          id: 1,
          questionId: 123,
          name: 'first option',
          isAnswer: false,
          selected: false,
        }, {
          id: 2,
          questionId: 123,
          name: 'first option',
          isAnswer: true,
          selected: false,
        }],
        answered: false,
        num_correct: 1,
        num_attempted: 2,
      }
    ];
    fixture.detectChanges();
    spyOn(component, 'onSelect');
    const selectLink = fixture.debugElement.query(By.css('.onselectbutton'));
    selectLink.triggerEventHandler('click', null);
    tick();
    expect(component.onSelect).toHaveBeenCalled();
  }));

  it('should submit quiz answers', fakeAsync(() => {
    spyOn(component, 'onSubmit');
    const submitLink = fixture.debugElement.query(By.css('#submit'));
    submitLink.triggerEventHandler('click', null);
    tick();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  it('should go to next question', fakeAsync(() => {
    spyOn(component, 'goTo');
    const goToLink = fixture.debugElement.query(By.css('#goto'));
    goToLink.triggerEventHandler('click', null);
    tick();
    expect(component.goTo).toHaveBeenCalled();
  }));

});
