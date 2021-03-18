import { EventEmitter, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { Unsubscriber } from 'app/components';
import { Question } from 'app/contracts';

export abstract class GenericQuestion extends Unsubscriber implements AfterViewInit {
  @ViewChild('statusTemplate') public statusTemplate: TemplateRef<any>;

  public answerReceived: EventEmitter<void> = new EventEmitter();
  public answerRemoved: EventEmitter<void> = new EventEmitter();

  private _question: Question;
  private _title: string;
  private _description: string;

  public abstract init(): void;

  public ngAfterViewInit(): void {
    this._question.statusTemplate = this.statusTemplate;
  }

  public activate(): void {

  }

  public deactivate(): void {
    this.question.answered = true;
    this.question.wasCorrect = this.isCorrect();
  }

  public hasAnswer(): boolean {
    return this.question.answer !== undefined;
  }

  public isCorrect(): boolean {
    return this.hasAnswer() && this.question.correctAnswer === this.question.answer;
  }

  public answerChanged(answer: any | null): void {
    if (answer === null) {
      this.setAnswer(void 0);
      this.answerRemoved.emit();
      return;
    }

    this.setAnswer(answer);
    this.answerReceived.emit();
  }

  public setCorrectAnswer(answer: any): void {
    this.question.correctAnswer = answer;
  }

  public setAnswer(answer: any): void {
    this.question.answer = answer;
  }

  public setTitle(title: string): void {
    this._question.title = title;
    this._title = title;
  }

  public setDescription(desciption: string): void {
    this._question.description = desciption;
    this._description = desciption;
  }

  get question(): Question {
    return this._question;
  }

  set question(question: Question) {
    question.component = this;
    this._question = question;
  }

  get title(): string {
    return this._title;
  }

  get desciption(): string {
    return this._description;
  }
}

export default GenericQuestion;
