import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule }  from '@angular/common';
import { FormsModule,  } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [HeaderComponent,CommonModule, FormsModule,FooterComponent],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  onSubmit(form: NgForm) {
    if (form.invalid) { return; }
    console.log('Connexion avec', form.value);
    alert(`Bienvenue, ${form.value.email} !`);
    form.resetForm();
  }
}
