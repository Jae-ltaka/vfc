import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Message {
  text: string;
  sender: 'bot' | 'user';
}
@Component({
  selector: 'app-ia',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,FormsModule,RouterModule],
  templateUrl: './ia.component.html',
  styleUrl: './ia.component.scss'
})
export class IaComponent {
 messages: Message[] = [
    { text: 'Bonjour ! Je suis Apolos.', sender: 'bot' },
    { text: 'Merci Apolos !', sender: 'user' }
  ];
  
  inputText: string = '';

  sendMessage() {
    const txt = this.inputText.trim();
    if (!txt) {
      return;
       }
    // On ajoute d’abord le message de l’utilisateur
    this.messages.push({ text: txt, sender: 'user' });
    // Ici, on pourrait appeler un service pour récupérer la réponse d’Apolos…
    // Par exemple :
    // this.apolosService.send(txt).subscribe(response => {
    //   this.messages.push({ text: response.reply, sender: 'bot' });
    // });
     setTimeout(() => {
    this.messages.push({
      text: this.getBotResponse(txt),
      sender: 'bot'
    });
  }, 1000);
    this.inputText = '';
      }
      getBotResponse(userText: string): string {
  const text = userText.toLowerCase();

  if (text.includes('bonjour')) {
    return "Paix à toi ! 🌿 Que puis-je faire pour toi aujourd'hui ?";
  }

  if (text.includes('merci')) {
    return "Avec joie 🙏. Souviens-toi : « Donnez, et il vous sera donné. » (Luc 6:38)";
  }

  if (text.includes('dieu')) {
    return "« Dieu est amour » (1 Jean 4:8) ❤️. Tu veux en parler ?";
  }

  if (text.includes('jesus')) {
    return "« Je suis le chemin, la vérité et la vie » (Jean 14:6) ✝️";
  }

  if (text.includes('aide')) {
    return "Je suis là pour t'aider ! Même Moïse avait besoin d'un coup de main 👋";
  }

  if (text.includes('bible')) {
    return "La Bible, c’est 73 livres, 1 seule histoire : l’amour de Dieu pour toi 📖.";
  }

  if (text.includes('amour')) {
    return "« L'amour ne fait point de mal au prochain : l'amour est donc l'accomplissement de la loi. » (Romains 13:10)";
  }

  return "Je n’ai pas bien saisi 🤔. Mais je suis là pour toi, n’hésite pas à reformuler 🙏";
}

}
