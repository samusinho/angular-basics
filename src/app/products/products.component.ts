import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products = [{
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

  showProductDetails(id: number, index: number) {
    console.log(id, this.products[index]);
  }

}
