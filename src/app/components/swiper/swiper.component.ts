import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss'
})
export class SwiperComponent {
  startDate = new Date();
  endDate = new Date();
  constructor() {
    console.log(this.startDate);
  }

}
