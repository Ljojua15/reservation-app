import { Component } from '@angular/core';
import { AuthComponent } from "../../components/auth/auth.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AuthComponent, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  authComp: boolean  = true;

  tab!:string 

  openAuthComp(x:string){
    this.tab = x
    this.authComp = !this.authComp
    console.log(x);
    
  }

  onAuthClose() {
    this.authComp = false; 
  }

}
