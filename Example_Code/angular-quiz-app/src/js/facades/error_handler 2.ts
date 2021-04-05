import { Injectable, ErrorHandler, isDevMode } from '@angular/core';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  private _modal: any;

  constructor() {
    super();
  }

  public handleError(error: any): void {
    if (this.isAnimationAbortedError(error)) {
      // An animation was interrupted or replaced.
      // No need for reporting an error.
      return;
    }

    if (!isDevMode()) {
      this.showErrorMessage();
      return;
    }

    super.handleError(error);
  }

  protected showErrorMessage(): void {
    if (!this._modal) {
      this._modal = $('#exception-modal').modal({
        dismissible: false,
        opacity: .3,
        inDuration: 200,
        outDuration: 150
      });
    }

    this._modal.modal('open');

    console.groupCollapsed('Whoops, something went wrong.');
    console.warn('Please run the app in development mode to debug.');
    console.groupEnd();
  }

  private isAnimationAbortedError(error: any): boolean {
    return !!error
      && typeof error.message === 'string'
      && error.message.indexOf('animation_aborted') !== -1;
  }

}

export default AppErrorHandler;
