import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom }  from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HomeComponent }        from './app/home/home.component';
import { AmbassadeursComponent }from './app/ambassadeurs/ambassadeurs.component';

const routes: Routes = [
  { path: '',            component: HomeComponent,        pathMatch: 'full' },
  { path: 'ambassadeurs', component: AmbassadeursComponent },
  { path: '**',           redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule),
    provideRouter(routes)
  ]
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
