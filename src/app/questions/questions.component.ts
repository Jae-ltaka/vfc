import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

interface Article {
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,NgFor,CommonModule,FormsModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  constructor(private router: Router) {}
  searchTerm: string = '';
  articles: Article[] = [
    {
      title: 'Jésus avait-il un ange gardien ?',
      imageUrl: 'assets/ange.jpg'
    },
    {
      title: 'Faut-il lire la Bible de manière littérale ou symbolique ?',
      imageUrl: 'assets/bible.jpg'
    },
    {
      title: 'Les péchés mortels peuvent-ils être pardonnés sans être confessés ?',
      imageUrl: 'assets/main.jpg'
    },
    {
      title: 'Jésus est-il mort uniquement pour les chrétiens ?',
      imageUrl: 'assets/jesus.jpg'
    },
  ];
}
   

