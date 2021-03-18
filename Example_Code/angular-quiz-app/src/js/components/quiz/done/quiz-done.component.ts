import { Component, ElementRef } from '@angular/core';

import { AnimationService, AnimationBuilder } from 'css-animator';

import { Unsubscriber } from 'app/components';
import { QuizService } from 'app/services';

import template from './quiz-done.html';
import mainStyle from './quiz-done.css';

@Component({
  selector: 'quiz-done',
  template: template,
  styles: [
    mainStyle
  ],
  host: {
    hidden: 'true'
  }
})
export class QuizDoneComponent extends Unsubscriber {

  private _animator: AnimationBuilder;
  private _hidden: boolean = true;

  constructor(
    private _quizService: QuizService,
    private _elementRef: ElementRef,
    animationService: AnimationService) {
      super();
      this._animator = animationService.builder();
      this.subscribe();
  }

  public show(): void {
    if (!this._hidden) {
      return;
    }

    this._hidden = false;

    this._animator
      .setType('fadeInUp')
      .setDelay(400)
      .setDuration(600)
      .show(this._elementRef.nativeElement);
  }

  public hide(): void {
    if (this._hidden) {
      return;
    }

    this._hidden = true;

    this._animator.setType('fadeOutDown')
      .setDelay(100)
      .setDuration(600)
      .hide(this._elementRef.nativeElement);
  }

  private subscribe(): void {
    let onCompleted = this._quizService
      .onCompleted
      .subscribe(() => {
        this.show();
      });

    let onRefresh = this._quizService
      .onRefresh
      .subscribe(() => {
        this.hide();
      });

    let onClose = this._quizService
      .onClose
      .subscribe(() => {
        this.hide();
      });

    this.subscriptions.push(onCompleted);
    this.subscriptions.push(onRefresh);
    this.subscriptions.push(onClose);
  }

}

export default QuizDoneComponent;
