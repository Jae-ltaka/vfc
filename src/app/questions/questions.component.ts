import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  constructor(private router: Router) {}
  
    goDon(): void {
      this.router.navigate(['/ambassadeurs']);
    }
}
