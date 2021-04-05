import './bootstrap';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app.module';
import { enableProdMode } from '@angular/core';

enableProdMode();

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
