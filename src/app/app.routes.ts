// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AmbassadorComponent } from './ambassadeurs/ambassadeurs.component';
import { QuiComponent } from './qui/qui.component';
import { QuestionsComponent } from './questions/questions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ambassadeurs', component: AmbassadorComponent },
  { path: 'qui',component: QuiComponent },
  {path:'questions',component: QuestionsComponent},
];
