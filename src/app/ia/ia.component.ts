import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

interface Message {
  text: string;
  sender: 'bot' | 'user';
}
@Component({
  selector: 'app-ia',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,BrowserModule,FormsModule],
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
    this.inputText = '';
      }
}
