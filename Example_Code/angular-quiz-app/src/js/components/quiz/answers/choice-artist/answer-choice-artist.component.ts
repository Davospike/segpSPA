import { Component } from '@angular/core';

import { QuizService } from 'app/services';
import { GenericAnswer } from 'app/components';
import { shuffle, randomTracksExcluding } from 'app/helpers';

import template from './answer-choice-artist.html';
import mainStyle from './answer-choice-artist.css';
import commonStyle from '../common.css';

@Component({
  selector: 'answer-choice-artist',
  template: template,
  styles: [
    commonStyle,
    mainStyle
  ]
})
export class AnswerChoiceArtistComponent extends GenericAnswer {

  public answers: { title: string, correct: boolean }[] = [];

  constructor(private quizService: QuizService) {
    super();
  }

  protected init(): void {
    const answers = [{ title: this.question.track.artists[0].name, correct: true }];

    for (let randomTrack of randomTracksExcluding(this.question.track.id, 3, this.quizService.tracks)) {
      answers.push({
        title: randomTrack.artists[0].name,
        correct: false
      });
    }

    shuffle(answers);
    this.answers = answers;
  }

}

export default AnswerChoiceArtistComponent;
