import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  form: FormGroup;
  @Output() createProduct = new EventEmitter<any>();

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      img: [null, Validators.required]
    });
  }

  onSubmit() {
    this.createProduct.emit(this.form.value);
  }

}
