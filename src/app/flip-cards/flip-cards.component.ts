import { Component } from '@angular/core';

@Component({
  selector: 'app-flip-cards',
  standalone: true,
  imports: [],
  templateUrl: './flip-cards.component.html',
  styleUrl: './flip-cards.component.scss'
})
export class FlipCardsComponent {
  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
