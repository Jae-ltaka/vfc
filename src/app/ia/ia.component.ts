import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApolosService } from '../services/apolos.service';

interface Message {
  text: string;
  sender: 'bot' | 'user';
}

@Component({
  selector: 'app-ia',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './ia.component.html',
  styleUrl: './ia.component.scss'
})
export class IaComponent {
  private apolosService = inject(ApolosService); // ✅ injection correcte pour standalone

  messages: Message[] = [
    { text: 'Bonjour ! Je suis Apolos.', sender: 'bot' },
    { text: 'Merci Apolos !', sender: 'user' }
  ];

  inputText: string = '';

  sendMessage() {
    const txt = this.inputText.trim();
    if (!txt) return;

    this.messages.push({ text: txt, sender: 'user' });
    this.inputText = '';

    this.apolosService.getReponses(txt).subscribe(
      (replies: string[]) => {
        for (const reply of replies) {
          this.messages.push({ text: reply, sender: 'bot' });
        }
      },
      (error: any) => {
        this.messages.push({
          text: "Erreur lors de la communication avec Apolos. 🙁",
          sender: 'bot'
        });
        console.error(error);
      }
    );
  }
}

