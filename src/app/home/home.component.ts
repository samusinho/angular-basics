import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  title = "Frutas y verduras"
  btnText = "Mostrar"
  infoText = "la información está oculta"
  infoHidden = true;

  ngOnInit(): void {
  }

  onClickButton() {
    this.infoHidden = !this.infoHidden;
    this.btnText = this.infoHidden ? "Mostrar" : "Ocultar"
    this.infoText = this.infoHidden ? "la información está oculta" : "La información ya no está oculta"
  }

}
