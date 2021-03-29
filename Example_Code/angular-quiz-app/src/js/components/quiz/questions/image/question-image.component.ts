import { Component } from '@angular/core';

import { GenericQuestion, QuestionType } from 'app/components';

import template from './question-image.html';
import mainStyle from './question-image.css';
import commonStyle from '../common.css';

@Component({
  selector: 'question-image',
  template: template,
  styles: [
    commonStyle,
    mainStyle
  ]
})
export class QuestionImageComponent extends GenericQuestion {

  public static type = QuestionType.Image;

  public init(): void {
    this.setTitle('What is the name of this album?');
    this.setCorrectAnswer(this.question.track.album.name);
  }

}

export default QuestionImageComponent;
