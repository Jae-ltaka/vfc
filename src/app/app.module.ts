import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms'; // ✅ POUR ngModel ET ngForm
import { CommonModule } from '@angular/common'; // ✅ POUR *ngIf

@NgModule({
  imports: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    ArticlesComponent,
    ContactFormComponent,
    FooterComponent,
    FormsModule,     
    CommonModule    
  ],
})
export class AppModule { }
