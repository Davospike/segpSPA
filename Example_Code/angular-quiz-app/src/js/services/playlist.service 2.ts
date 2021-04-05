import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import LocaleService from './locale.service';
import { Playlist } from 'app/contracts';

@Injectable()
export class PlaylistService {

  private _apiUrl = 'api/playlist/random';
  private _mockUrl = 'assets/mock/playlist.json';

  constructor(private http: Http, private localeService: LocaleService) {

  }

  public getMockPlaylist(): Observable<Playlist> {
    let requestUrl = this._mockUrl;

    return this.http.get(requestUrl).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  public getPlaylist(): Observable<Playlist> {
    let requestUrl = this._apiUrl;

    if (this.localeService.locale && this.localeService.locale.value) {
      requestUrl += '?country=' + this.localeService.locale.value;
    }

    return this.http.get(requestUrl).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    return res.json() || {};
  }

  private handleError(error: any) {
    let errMsg = error.message || 'Error requesting playlist.';
    console.error(errMsg);
    return throwError(errMsg);
  }

}

export default PlaylistService;
