import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
}
