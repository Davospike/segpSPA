import { Component, AfterViewInit, Input, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';

import { AnimationService, AnimationBuilder } from 'css-animator';
import { Unsubscriber, GenericQuestion, QUESTIONS_COMPONENTS_MAP } from 'app/components';
import { QuizService } from 'app/services';
import { Question } from 'app/contracts';
import { ContainerRefDirective } from 'app/directives';

import template from './question.html';
import mainStyle from './question.css';

@Component({
  selector: 'question-host',
  template: template,
  styles: [
    mainStyle
  ]
})
export class QuestionComponent extends Unsubscriber implements AfterViewInit {
  @ViewChild(ContainerRefDirective) public questionHost: ContainerRefDirective;
  @Input() public question: Question;

  private _nextTimeout: any = null;
  private _animator: AnimationBuilder;
  private _active: boolean = false;

  private component: GenericQuestion;

  constructor(private _elementRef: ElementRef, private _quizService: QuizService, animationService: AnimationService, private resolver: ComponentFactoryResolver) {
    super();
    this._animator = animationService.builder().setDuration(600);
    this.subscribeToActivate();
    this.subscribeToClose();
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadComponent().then(() => {
        if (this.question.id === this._quizService.totalQuestions) {
          setTimeout(() => {
            this._quizService.ready();
          }, 100);
        }
      });
    });
  }

  public answerIsCorrect(): boolean {
    if (!this.component) {
      return false;
    }

    return this.component.isCorrect();
  }

  public nextQuestion(button: HTMLElement): void {
    if (this._nextTimeout !== null) {
      clearTimeout(this._nextTimeout);
    }

    if (!this.component || !this.component.hasAnswer()) {
      return;
    }

    if (this.answerIsCorrect()) {
      button.classList.add('green');
    } else {
      button.classList.add('red');
    }

    this._nextTimeout = setTimeout(() => {
      this._quizService.activateQuestion(this.question.id + 1);
      this._nextTimeout = null;
    }, 400);
  }

  get hasAnswer(): boolean {
    if (!this.component) {
      return false;
    }

    return this.component.hasAnswer();
  }

  get active(): boolean {
    return this._active;
  }

  get quizService(): QuizService {
    return this._quizService;
  }

  private subscribeToActivate(): void {
    let subscription = this._quizService
      .onActivateQuestion.subscribe((questionNumber: number) => {
        if (questionNumber === this.question.id) {
          this.activateQuestion();
        } else if (this.active) {
          this.deactivateQuestion();
        }
      });

    this.subscriptions.push(subscription);
  }

  private subscribeToClose(): void {
    let subscription = this._quizService
      .onClose
      .subscribe((questionNumber: number) => {
        if (this._active) {
          this._animator
            .setType('fadeOutDown')
            .setDuration(600)
            .hide(this._elementRef.nativeElement);
        }
      });

    this.subscriptions.push(subscription);
  }

  private subscribeToAnswerReceived(): void {
    let subscription = this.component
      .answerReceived.subscribe(() => {

      });

    this.subscriptions.push(subscription);
  }

  private subscribeToAnswerRemoved(): void {
    let subscription = this.component
      .answerRemoved.subscribe(() => {

      });

    this.subscriptions.push(subscription);
  }

  private activateQuestion(): void {
    this.component.activate();

    this._active = true;
    this._animator.setType('fadeInRight').setDelay(200);

    if (this.question.id === 1) {
      this._animator.setType('fadeInUp');
    }

    this._animator.show(this._elementRef.nativeElement);
  }

  private deactivateQuestion(): void {
    this.component.deactivate();

    this._animator.setType('fadeOutLeft').setDelay(0).setDuration(600);

    if (this.question.id === this._quizService.totalQuestions) {
      this._animator.setType('fadeOutDown');
      this._quizService.completed();
    }

    this._animator.hide(this._elementRef.nativeElement);
    this._active = false;
  }

  private async loadComponent(): Promise<void> {
    // const componentFactory = this.resolver.resolveComponentFactory(QUESTIONS_COMPONENTS_MAP[0]);
    const componentFactory = this.resolver.resolveComponentFactory(QUESTIONS_COMPONENTS_MAP[this.question.type]);

    const viewContainerRef = this.questionHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const component = componentRef.instance as GenericQuestion;
    component.question = this.question;
    component.init();

    this.component = component;
  }

}

export default QuestionComponent;
