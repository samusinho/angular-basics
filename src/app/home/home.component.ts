import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  title = "Frutas y verduras"
  
  tab = 'products'

  ngOnInit(): void {
  }

  onTabSelected(tab: string) {
    this.tab = tab;
  }
}
