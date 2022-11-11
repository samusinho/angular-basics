import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  title = "Frutas y verduras"
  btnText = "Habilitar"
  disabled = true;

  inputText: string = "texto a cargar en el input";

  ngOnInit(): void {
  }

  onClickButton() {
    this.disabled = !this.disabled;
    this.btnText = this.disabled ? "Habilitar" : "Deshabilitar"
  }

}
