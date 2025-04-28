import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
      RouterModule       // ← pour [routerLink], routerLinkActive, ...
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  constructor(public router: Router) {}
  goAmbassadeurs() {
    this.router.navigate(['/ambassadeurs']);
  }
}
