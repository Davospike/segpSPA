import { Component } from '@angular/core';

import { QuizService } from 'app/services';
import { GenericAnswer } from 'app/components';
import { shuffle, randomTracksExcluding } from 'app/helpers';

import template from './answer-choice-album.html';
import mainStyle from './answer-choice-album.css';
import commonStyle from '../common.css';

@Component({
  selector: 'answer-choice-album',
  template: template,
  styles: [
    commonStyle,
    mainStyle
  ]
})
export class AnswerChoiceAlbumComponent extends GenericAnswer {

  public answers: { title: string, correct: boolean }[] = [];

  constructor(private quizService: QuizService) {
    super();
  }

  protected init(): void {
    const answers = [{ title: this.question.track.album.name, correct: true }];

    for (let randomTrack of randomTracksExcluding(this.question.track.id, 3, this.quizService.tracks)) {
      answers.push({
        title: randomTrack.album.name,
        correct: false
      });
    }

    shuffle(answers);
    this.answers = answers;
  }

}

export default AnswerChoiceAlbumComponent;
