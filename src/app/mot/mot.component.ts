import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-mot',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule],
  templateUrl: './mot.component.html',
  styleUrl: './mot.component.scss'
})
export class MotComponent {
  envoyerLien() {
    // Appelle ici ton service backend pour envoyer l'e-mail de reset
    alert('Un lien a été envoyé à votre adresse e-mail.');

  }
}
