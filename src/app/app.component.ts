import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlipCardsComponent } from './flip-cards/flip-cards.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { InputsComponent } from './components/inputs/inputs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlipCardsComponent, SliderComponent, SwiperComponent, InputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
