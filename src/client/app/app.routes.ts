import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import {LoginRoutes} from "./login/login.routes";

export const routes: Routes = [
  ...LoginRoutes,
  ...HomeRoutes,
  ...AboutRoutes
];
