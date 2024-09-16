import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ems';
  isScreenSmall: boolean = false;

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver){
    this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.Tablet]).subscribe(result=>{
      this.isScreenSmall = result.matches;
      console.log(this.isScreenSmall);
    })
  }

  toggleSidenav() {
    if(this.isScreenSmall){
      this.sidenav.close();
    }
  }
}