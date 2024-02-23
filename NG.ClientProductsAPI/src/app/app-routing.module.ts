import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './Components/list-product/list-product.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';

const routes: Routes = [
  { path: "", redirectTo: "/ProductCategory", pathMatch: "full" },
  { path: "ProductCategory", component: ListProductComponent },
  { path: "ProductCategory/create", component: AddProductComponent },
  /*The : id part is a placeholder for a dynamic segment that will be captured by the route.*/
  { path: "ProductCategory/:id/update", component: EditProductComponent },
  { path: "ProductCategory/edit/:id", component: EditProductComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
