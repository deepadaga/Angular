import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsSSF';

  constructor(private router:Router) {}
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}


