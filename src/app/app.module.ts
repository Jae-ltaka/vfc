import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ArticlesComponent,
    ContactFormComponent,
    FooterComponent,
  ],
})
export class AppModule { }
