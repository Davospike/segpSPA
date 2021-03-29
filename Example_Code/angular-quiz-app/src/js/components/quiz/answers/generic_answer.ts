import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Question } from 'app/contracts';

export abstract class GenericAnswer implements OnInit {

  @Input() public question: Question;
  @Output() public onAnswerChange: EventEmitter<any> = new EventEmitter();

  public ngOnInit(): void {
    this.init();
  }

  public answerChanged(answer: any | null): void {
    this.onAnswerChange.emit(answer);
  }

  public hasAnswer(): boolean {
    return this.question.answer !== undefined;
  }

  protected abstract init(): void;

}

export default GenericAnswer;
