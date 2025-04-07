import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule,
    CommonModule,
  ], // ✅ à ajouter ici si c’est un composant standalone
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  onSubmit(): void {
    alert('Message envoyé ! Merci pour votre message.');
    // Ici tu peux ajouter un appel API ou un service d’envoi d’email
  }
}
