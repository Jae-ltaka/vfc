import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ambassadeurs',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './ambassadeurs.component.html',
  styleUrl: './ambassadeurs.component.scss'
})
export class AmbassadorComponent {
  constructor(private router: Router) {}

  goAmbassadeurs(): void {
    this.router.navigate(['/ambassadeurs']);
  }
}
