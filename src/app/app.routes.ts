import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AmbassadeursComponent } from './ambassadeurs/ambassadeurs.component';

const Routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'ambassadeurs', component: AmbassadeursComponent },
];
export const routes: Routes = [];
