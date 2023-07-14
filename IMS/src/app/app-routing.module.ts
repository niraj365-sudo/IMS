import { NgModule } from '@angular/core';
import { DataTablesModule } from "angular-datatables";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './content_page/dashboard/dashboard.component';
import { SuppliersComponent } from './content_page/suppliers/suppliers.component';
import { ProductsComponent } from './content_page/products/products.component';
import { CustomerComponent } from './content_page/customer/customer.component';
import { CategoryComponent } from './content_page/category/category.component';
import { PurchaseProductComponent } from './content_page/purchase-product/purchase-product.component';
import { AuthGuard } from './content_page/guard/auth.guard';
import { loginComponent } from './content_page/login/login.component';
import { RegisterComponent } from './content_page/register/register.component';

const routes: Routes = [
  {path:"", component:DashboardComponent, },
  {path:"suppliers",component:SuppliersComponent,canActivate:[AuthGuard]},
  {path:"products",component:ProductsComponent,canActivate:[AuthGuard]},
  {path:"customer",component:CustomerComponent,canActivate:[AuthGuard]},
  {path:"category",component:CategoryComponent,canActivate:[AuthGuard]},
  {path:"purchase-product",component:PurchaseProductComponent,canActivate:[AuthGuard]},
  {path:"login",component:loginComponent },
  {path:"register",component:RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
