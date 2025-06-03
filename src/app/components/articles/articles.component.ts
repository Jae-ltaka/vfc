import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ViewportScroller }  from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule,FormsModule, ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    // Dès que le composant est initialisé, on remonte en haut de la page
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
