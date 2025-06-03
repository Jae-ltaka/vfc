// app.routes.ts
import { Routes } from '@angular/router';
import { NgModule }             from '@angular/core';
import { RouterModule, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AmbassadorComponent } from './ambassadeurs/ambassadeurs.component';
import { QuiComponent } from './qui/qui.component';
import { QuestionsComponent } from './questions/questions.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MotComponent } from './mot/mot.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ambassadeurs', component: AmbassadorComponent, },
  { path: 'qui',component: QuiComponent },
  {path:'questions',component: QuestionsComponent},
  {path: 'connexion',component:ConnexionComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'mot',component:MotComponent},
];
