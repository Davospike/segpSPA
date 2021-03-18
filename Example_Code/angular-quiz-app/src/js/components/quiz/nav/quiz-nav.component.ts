import { Component, Output, EventEmitter } from '@angular/core';
import { AnimatesDirective } from 'css-animator';

import { QuizService } from 'app/services';

import template from './quiz-nav.html';
import mainStyle from './quiz-nav.css';

@Component({
  selector: 'quiz-nav',
  template: template,
  styles: [
    mainStyle
  ]
})
export class QuizNavComponent {
  @Output() public onGoHome = new EventEmitter<any>();
  @Output() public onRefresh = new EventEmitter<any>();
  @Output() public onClose = new EventEmitter<any>();

  constructor(private _quizService: QuizService) {

  }

  public get progress(): number {
    return this._quizService.progress();
  }

  public goHome(): void {
    this.onGoHome.emit();
  }

  public refresh(navAnimatesDirective: AnimatesDirective): void {
    this.onRefresh.emit();
  }

  public close(navAnimatesDirective: AnimatesDirective): void {
    this.onClose.emit();
    navAnimatesDirective.hide({ type: 'fadeOutUp', delay: 400, duration: 600 });
  }

}

export default QuizNavComponent;
