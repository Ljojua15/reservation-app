import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements AfterViewInit {
  @Output() close = new EventEmitter<void>();
  @Input() tabs!: string

  signTabs: string = ''; 

  ngAfterViewInit(): void {
    // this.tabs = this.signTabs
    // console.log(this.tabs = this.signTabs);
    
  }


  changeTab(tab: string): void {
    this.tabs = tab;
    console.log(this.tabs, 'test');
    
  }

  closeAuth() {
    this.close.emit(); 
}
}