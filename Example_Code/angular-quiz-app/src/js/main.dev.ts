console.warn('-----------------------------------');
console.warn('Application is in Development mode!');
console.warn('-----------------------------------');

import './bootstrap';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
