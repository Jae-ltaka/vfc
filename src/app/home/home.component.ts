import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor (public router: Router) {}
  ngOnInit(): void {
  }
   gotoambassadeurs() {this.router.navigate(['/ambassadeurs'])}
  }

