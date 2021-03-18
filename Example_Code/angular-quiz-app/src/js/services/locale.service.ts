import { Injectable } from '@angular/core';

export interface LocaleData {
  name: string;
  value: string;
}

@Injectable()
export class LocaleService {

  private _locale: LocaleData;

  private localStorageAvailable(): boolean {
    if (typeof (Storage) !== "undefined" && localStorage) {
      return true;
    }

    return false;
  }

  get locale(): LocaleData {
    let region = null;

    if (this.localStorageAvailable()) {
      try {
        region = JSON.parse(localStorage.getItem('hue.region'));
      } catch (e) { }
    }

    if (region !== null) {
      this._locale = region;
    }

    return this._locale || { name: '', value: '' };
  }

  set locale(locale: LocaleData) {
    if (this.localStorageAvailable()) {
      try {
        localStorage.setItem('hue.region', JSON.stringify(locale));
      } catch (e) { }
    }

    this._locale = locale;
  }

}

export default LocaleService;
