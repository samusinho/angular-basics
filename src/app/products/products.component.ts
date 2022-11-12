import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  @Input() products: any[];

  ngOnInit(): void {
  }

  showProductDetails(id: number, index: number) {
    console.log(id, this.products[index]);
  }

}
