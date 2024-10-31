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

  selectedIndex = 0;

  showPrev(i: number) {
    if (this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
    }
    console.log(this.selectedIndex, 'log');
  }
  showNext(i: number) {
    if (this.selectedIndex < this.autoConfig.length - 1) {
      this.selectedIndex = i + 1;
      console.log(this.selectedIndex);
    }
  }
  // showPrev() {
  //   this.selectedIndex =
  //     (this.selectedIndex - 1 + this.autoConfig.length) %
  //     this.autoConfig.length;
  // }
  // showNext() {
  //   this.selectedIndex = (this.selectedIndex + 1) % this.autoConfig.length;
  // }
}
