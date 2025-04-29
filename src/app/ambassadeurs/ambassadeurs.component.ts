import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-ambassadeurs',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './ambassadeurs.component.html',
  styleUrl: './ambassadeurs.component.scss'
})
export class AmbassadeursComponent {

}
