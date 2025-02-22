import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'nav-components',
  imports: [RouterLink],
  templateUrl: './nav-components.component.html',
  styleUrl: './nav-components.component.css'
})
export class NavComponentsComponent {
  
  constructor() {
  }
}
