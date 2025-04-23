import { bootstrapApplication } from '@angular/platform-browser';
import { appLoginConfig } from './app/login/login.config';
import {LoginComponent} from './app/login/login.component';
import {RegisterComponent} from './app/register/register.component';

  bootstrapApplication(LoginComponent, appLoginConfig)  .catch((err) => console.error(err));
  bootstrapApplication(RegisterComponent);

