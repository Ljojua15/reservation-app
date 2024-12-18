import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, viewChild } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss'
})
export class SwiperComponent implements AfterViewInit {

  @ViewChild('main') elementReference!: ElementRef


  private scrollArrow: number = 50 
  private scrollMouse: number = 30 
  private isDragging = false;  
  startDate = new Date('2024-12-09T11:00:00+04:00').getTime(); 
  endDate = new Date('2024-12-18T18:00:00+04:00'); 

  public dateArray: string[] = []
  public currentDate: string = this.formatDate(new Date()); 
  public otherDates:string = this.formatDate(new Date())
  public currentTime: string = this.formatTime(new Date());

  startX!: number;
  scrollLeft!: any;

  constructor() {
  }


  ngAfterViewInit(): void {
    this.generateDates()
    this.scrollToCurrentDate();
  
  }

  checkAndUpdateDate(): void {
    // Calculate the time remaining until the next target time (e.g., 11:12:00 of the next day)
    const now = new Date();
    const currentTimestamp = now.getTime();
    
    // Target date based on the startDate and increment it if needed
    let targetDate = new Date(this.startDate);
    if (currentTimestamp > targetDate.getTime()) {
      // If the current time has passed today's target, calculate for tomorrow
      targetDate.setDate(targetDate.getDate() + 1);
    }

    // Calculate time difference in milliseconds
    const timeDifference = targetDate.getTime() - currentTimestamp;
    
    // If time difference is 0, we update immediately
    if (timeDifference <= 0) {
      this.updateDate();
    }
  }

  updateDate(): void {
    const now = new Date();
    this.currentDate = this.formatDate(now); // Update the current date
    console.log('Date updated:', this.currentDate);
    // You can also trigger the swiper update or scroll here if needed
  }

  generateDates(): void {
    let currentDate = new Date(this.startDate); 

    while (currentDate <= this.endDate) {
      this.dateArray.push(this.formatDate(currentDate)); 
      currentDate.setDate(currentDate.getDate() + 1); 

    }
  }

  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const year = date.getFullYear().toString().slice(-2); 
    return `${day}.${month}.${year}`;
  }

  formatTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Tbilisi'
    };

    return date.toLocaleString('en-US', options); // Returns time like 13:30
  }


  scrollToCurrentDate(): void {
    const currentDateIndex = this.dateArray.indexOf(this.currentDate);
    if (currentDateIndex === -1) return;

    // Calculate the width of each date element
    const dateElement = this.elementReference.nativeElement.querySelectorAll('div');
    const dateWidth = dateElement[0]?.offsetWidth;

    // Calculate the scroll position to center the current date
    const scrollToPosition = currentDateIndex * dateWidth - (this.elementReference.nativeElement.offsetWidth / 2) + (dateWidth / 2);

    // Scroll the container
    this.elementReference.nativeElement.scrollLeft = scrollToPosition;
  }


  changeContent(date: string): void {
    this.currentDate = date;
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
    event.preventDefault(); 
  }

  // While dragging the swiper (mouse move)
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return; 

    const x = event.pageX - this.elementReference.nativeElement.offsetLeft;
    const scroll = x - this.startX;
    this.elementReference.nativeElement.scrollLeft = this.scrollLeft - scroll;  
  }

  onMouseUp(): void {
    this.isDragging = false;
  }

  onMouseLeave(): void {
    this.isDragging = false;
  }
}

