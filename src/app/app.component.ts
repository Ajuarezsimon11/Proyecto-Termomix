import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponentsComponent } from "./components/nav-components/nav-components.component";

@Component({
  selector: 'app-root',
  imports: [NavComponentsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025-Thermomix';
}
