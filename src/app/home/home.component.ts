import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  title = "Frutas y verduras"
  tab = 'new-product'

  productsFromHome = [{
    id: 1,
    name: "Plátano verde",
    price: 1000,
    img: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/09/conservar-platanos-verdes-luisecheverriurrea.jpg'
  }, {
    id: 2,
    name: "Papita criolla",
    price: 2000,
    img: 'https://cdn10.totalcode.net/mercacentro/product-zoom/es/papa-criolla-kilo-1000-g-1.webp'
  }, {
    id: 3,
    name: "Apio españa",
    price: 1500,
    img: 'https://mejorconsalud.as.com/wp-content/uploads/2018/05/apio-fresco-cortado-entero.jpg'
  }]

  ngOnInit(): void {
  }

  onTabSelected(tab: string) {
    this.tab = tab;
  }

  onProductCreated(info: any) {
    this.productsFromHome.push({
      ...info,
      id: this.productsFromHome.length + 1
    });
    this.tab = 'products';
  }
}
