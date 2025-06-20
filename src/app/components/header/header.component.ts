import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
   searchQuery: string = '';
  constructor(public router: Router) {}
   onSearch() {
    const query = this.searchQuery.trim();
    if (query) {
      this.router.navigate(['/recherche'], { queryParams: { query } });
    }
      }

  goAmbassadeurs() {
    this.router.navigate(['/ambassadeurs']);
  }
  goToQuestion(){
    this.router.navigate(['/questions'])
  }
  goConnexion() {
    this.router.navigate(['/connexion']);
  }
}
