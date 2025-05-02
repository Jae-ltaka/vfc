import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
@Component({
  selector: 'app-qui',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './qui.component.html',
  styleUrl: './qui.component.scss'
})
export class QuiComponent {

}
