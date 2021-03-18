import IScroll from 'iscroll';
import { AfterContentInit, Component, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

import { Unsubscriber } from 'app/components';
import { QuizService } from 'app/services';

import template from './quiz-status.html';
import mainStyle from './quiz-status.css';

@Component({
  selector: 'quiz-status',
  template: template,
  styles: [
    mainStyle
  ]
})
export class QuizStatusComponent extends Unsubscriber implements AfterContentInit, OnDestroy {

  @Output() public modalActions = new EventEmitter<string | MaterializeAction>();

  private _modal: HTMLElement = null;
  private _scroll: IScroll = null;

  constructor(private _quizService: QuizService, private _elementRef: ElementRef) {
    super();
  }

  public ngAfterContentInit(): void {
    this._modal = this._elementRef
      .nativeElement
      .querySelector('#status');

    this._scroll = new IScroll(this._modal, {
      deceleration: 0.005,
      mouseWheel: true,
      mouseWheelSpeed: 10,
      probeType: 2,
      tap: false,
      click: true
    });

    let onActivateQuestion = this._quizService
    .onActivateQuestion
    .subscribe(() => {
      this.refreshScroll();
    });

    let onCompleted = this._quizService
    .onCompleted
    .subscribe(() => {
      this.refreshScroll();
    });

    this.subscriptions.push(onActivateQuestion);
    this.subscriptions.push(onCompleted);
  }

  public ngOnDestroy(): void {
    if (this._scroll) {
      this._scroll.destroy();
      this._scroll = null;
    }
  }

  public refreshScroll(): void {
    this._modal.style.display = 'initial';
    setTimeout(() => {
      this._modal.style.display = 'hidden';
      this._scroll.refresh();
    });
  }

  public openModal(): void {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  public closeModal(): void {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

  get quizService(): QuizService {
    return this._quizService;
  }

}

export default QuizStatusComponent;
