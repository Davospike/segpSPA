import * as Hammer from 'hammerjs';
(window as any).Hammer = Hammer;

import { AnimationBuilder } from 'css-animator/builder';
import 'materialize-css';
import 'angular2-materialize';

AnimationBuilder.defaults.fixed = true;
