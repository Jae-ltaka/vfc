import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { BannerComponent } from '../components/banner/banner.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { FooterComponent } from '../components/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,BannerComponent,ArticlesComponent,ContactFormComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor (public router: Router) {}
  ngOnInit(): void {
  }
   gotoambassadeurs() {this.router.navigate(['/ambassadeurs'])}
  }

