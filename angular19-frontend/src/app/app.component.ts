import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ✅ Import RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet] // ✅ Import RouterOutlet for routing
})
export class AppComponent {
  title = 'angular19-frontend';
}
