import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { galleryConfig } from './helpers/gallery.config';
import { HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, HammerModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  protected readonly autoConfig = galleryConfig;

  selectedIndex = 1;

  showPrev(i: number) {
    console.log('left');
    if (this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
      console.log('left-in');
    }
  }
  showNext(i: number) {
    console.log('right');
    if (this.selectedIndex < this.autoConfig.length - 1) {
      this.selectedIndex = i + 1;
      console.log('right-in');
    }
  }

  public number: number = 0;

  increase() {
    this.number++;
  }

  decrease() {
    if (this.number === 0) return;
    this.number--;
  }
}
