import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlipCardsComponent } from "./flip-cards/flip-cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlipCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
