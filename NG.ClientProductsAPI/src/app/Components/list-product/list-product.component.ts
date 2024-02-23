import { Component } from '@angular/core';
import { ProductCategory } from '../../Models/product-category';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  public ProductCategory: ProductCategory[] = [];
  constructor(private service: ProductService)
  {

  }

  LoadData()
  {
    this.service.GetProducts().subscribe((response: ProductCategory[]) => {
      this.ProductCategory = response;
      console.log(response);
    },
      (error) => {
        console.log('Observable emitted an error:' + error);

      });
  }

  DeleteProduct(product: ProductCategory)
  {
    let confirmDelete: boolean = confirm(`Delete: ${product.name}?`);
    if (confirmDelete) {
      this.service.DeleteProduct(product.productCategoryID).subscribe(() => {
        this.LoadData();
      },
        (error) =>
        {
          console.log('Observable emitted an error:' + error);
        });
    }
  }

}
