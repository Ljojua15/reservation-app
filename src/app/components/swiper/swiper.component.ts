import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, viewChild } from '@angular/core';
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
export class SwiperComponent implements AfterViewInit {

  @ViewChild('main') elementReference!: ElementRef


  private scrollArrow: number = 50 
  private scrollMouse: number = 30 
  private   isDragging = false;  
  startDate = new Date();
  endDate = new Date();
  startX!: number;
  scrollLeft!: any;
  constructor() {
  }


  ngAfterViewInit(): void {

  }


  rightClick(){
    this.elementReference.nativeElement.scrollLeft += this.scrollArrow;
  }

 leftClick(){
  this.elementReference.nativeElement.scrollLeft -=  this.scrollArrow;
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    event.preventDefault();

    if (event.deltaY > 0) {
      this.elementReference.nativeElement.scrollLeft +=  this.scrollMouse; 
    } else {
      this.elementReference.nativeElement.scrollLeft -= this.scrollMouse;; 
    }
  }
  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.pageX - this.elementReference.nativeElement.offsetLeft;
    this.scrollLeft = this.elementReference.nativeElement.scrollLeft;
    event.preventDefault();  // Prevent default drag behavior
  }

  // While dragging the swiper (mouse move)
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;  // If not dragging, ignore

    const x = event.pageX - this.elementReference.nativeElement.offsetLeft;
    const scroll = x - this.startX;
    this.elementReference.nativeElement.scrollLeft = this.scrollLeft - scroll;  // Adjust the scroll position
  }

  // Stop dragging the swiper (mouse up or leave)
  onMouseUp(): void {
    this.isDragging = false;
  }

  // Stop dragging when the mouse leaves the swiper container
  onMouseLeave(): void {
    this.isDragging = false;
  }
}

