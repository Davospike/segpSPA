import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnimationService, AnimationBuilder } from 'css-animator';
import { LocaleService } from 'app/services';
import { RegionOptions, REGION_VALUES } from './region_options';

import template from './landing.html';
import mainStyle from './landing.css';

@Component({
  selector: 'landing-host',
  host: {
    'hidden': 'true'
  },
  template: template,
  styles: [
    mainStyle
  ]
})
export class LandingComponent implements OnInit, AfterViewInit {

  public selectOptions: RegionOptions[] = REGION_VALUES;
  public submitted = false;

  private _animator: AnimationBuilder;
  private _regionSelection: any;

  constructor(
    private _elementRef: ElementRef,
    private router: Router,
    private _localeService: LocaleService,
    animationService: AnimationService) {
    this._animator = animationService.builder();
  }

  public ngOnInit() {
    this._regionSelection = this._localeService.locale.value;
  }

  public ngAfterViewInit() {
    this._animator
      .setType('fadeInUp')
      .setDelay(150)
      .setDuration(700)
      .show(this._elementRef.nativeElement);
  }

  get regionSelection() {
    return this._regionSelection;
  }

  set regionSelection(value) {
    let locale;

    for (let region of this.selectOptions) {
      if (region.value === value) {
        locale = region;
      }
    }

    this._localeService.locale = locale || value;
    this._regionSelection = value;
  }

  public startQuiz(): void {
    if (this.submitted) {
      return;
    }

    this.submitted = true;

    this._animator
      .setType('fadeOutDown')
      .setDelay(350)
      .setDuration(600)
      .hide(this._elementRef.nativeElement.firstChild)
      .then(() => {
        this.router.navigate(['/quiz']);
      });
  }

}

export default LandingComponent;
