import { interval } from 'rxjs';
import { timeInterval, take } from 'rxjs/operators';

import { Component } from '@angular/core';

import { GenericQuestion, QuestionType } from 'app/components';
import { QuizService } from 'app/services';

import template from './question-audio.html';
import mainStyle from './question-audio.css';
import commonStyle from '../common.css';

type Player = { player: HTMLAudioElement, isPlaying?: boolean };

@Component({
  selector: 'question-audio',
  template: template,
  styles: [
    commonStyle,
    mainStyle
  ]
})
export class QuestionAudioComponent extends GenericQuestion {

  public static type = QuestionType.Audio;

  private static _players: Player[] = [];

  private _player: HTMLAudioElement;
  private _countdown = 10;

  constructor(private _quizService: QuizService) {
    super();
  }

  public init(): void {
    this.setTitle('What is the name of this song?');
    this.setDescription(`You can play ${this._countdown} seconds of the song.`);
    this.setCorrectAnswer(this.question.track.name);
    this.subscribeToClose();
    this.subscribeToRefresh();
  }

  public activate(): void {
    super.activate();
  }

  public deactivate(): void {
    this.stopAllPlayers();

    if (this._player) {
      this._player.pause();
    }

    super.deactivate();
  }

  public playSong(player: HTMLAudioElement, button: HTMLElement): void {
    this.stopAllPlayers();

    this._player = player;
    let countdown = this._countdown - 1;

    interval(1000)
      .pipe(
        timeInterval(),
        take(this._countdown)
      )
      .subscribe((next) => {
        this._countdown = countdown - next.value;
      }, (error) => {

      }, () => {
        this._countdown = 0;
        player.pause();
      });

    player.play();
    button.setAttribute('disabled', '');
    button.classList.add('disabled');
  }

  public stopPlayback(player: HTMLAudioElement): void {
    let p = this.getPlayer(player);

    p.isPlaying = false;
    player.currentTime = 0;
    player.pause();
  }

  public stopAllPlayers(): void {
    for (let p of QuestionAudioComponent._players) {
      this.stopPlayback(p.player);
    }
  }

  public startPlayback(player: HTMLAudioElement): void {
    let p = this.getPlayer(player);
    this.stopAllPlayers();

    p.isPlaying = true;
    player.currentTime = 0;
    player.play();
  }

  public togglePlayback(player: HTMLAudioElement): void {
    if (player.ended || player.paused) {
      this.startPlayback(player);
      return;
    }

    this.stopPlayback(player);
  }

  public isAudioPlaying(player: HTMLAudioElement): boolean {
    let p = this.getPlayer(player);

    if (p.isPlaying) {
      return true;
    }

    return false;
  }

  public getPlayer(player: HTMLAudioElement): Player {
    for (let p of QuestionAudioComponent._players) {
      if (p.player === player) {
        return p;
      }
    }

    let entry = { player: player };
    QuestionAudioComponent._players.push(entry);

    return entry;
  }

  get countdown(): number {
    return this._countdown;
  }

  private subscribeToClose(): void {
    let subscription = this._quizService
      .onClose
      .subscribe(() => {
        QuestionAudioComponent._players = [];
      });

    this.subscriptions.push(subscription);
  }

  private subscribeToRefresh(): void {
    let subscription = this._quizService
      .onRefresh
      .subscribe(() => {
        QuestionAudioComponent._players = [];
      });

    this.subscriptions.push(subscription);
  }

}

export default QuestionAudioComponent;
