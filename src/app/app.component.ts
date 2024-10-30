import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlipCardsComponent } from './flip-cards/flip-cards.component';
import { SliderComponent } from './components/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlipCardsComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
