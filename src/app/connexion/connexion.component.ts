import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CommonModule }  from '@angular/common';
import { FormsModule,  } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {
  onSubmit(form: NgForm) {
    if (form.invalid) { return; }
    console.log('Connexion avec', form.value);
    alert(`Bienvenue, ${form.value.email} !`);
    form.resetForm();
  }
  constructor (private router: Router) {}
  goToInscription(): void {
    this.router.navigate(['/inscription']);
  }
   goToMot(): void {
    this.router.navigate(['/mot']);
  }
}
