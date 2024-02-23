import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../Models/product-category';
import { Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit
{

  public model!: ProductCategory;

  constructor(private Service: ProductService, private router: Router)
  {

  }

  /*This is a special method within an Angular component called a "lifecycle hook." It's automatically called by Angular when the component is first initialized (hence the name "on init").*/

  ngOnInit(): void {
    this.model = new ProductCategory();
  }


  OnSubmit() {

    this.Service.SaveProduct(this.model).subscribe({
      next: () => {
        this.router.navigate([""]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  AddProduct() {

    this.model.products.push(new Product());

  }

  DeleteProduct(index: number) {

    const remItem = this.model.products.splice(index, 1);
  }

}
