import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlipCardsComponent } from './flip-cards/flip-cards.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { HeaderComponent } from "./mainComponents/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
