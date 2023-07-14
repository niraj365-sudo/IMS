import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './Layouts/topbar/topbar.component';
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { DashboardComponent } from './content_page/dashboard/dashboard.component';
import { ProductsComponent } from './content_page/products/products.component';
import { SuppliersComponent } from './content_page/suppliers/suppliers.component';
import { CategoryComponent } from './content_page/category/category.component';
import { CustomerComponent } from './content_page/customer/customer.component';
import { PurchaseProductComponent } from './content_page/purchase-product/purchase-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { loginComponent } from './content_page/login/login.component';
import { RegisterComponent } from './content_page/register/register.component';
import{ ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [		
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    ProductsComponent,
    SuppliersComponent,
    CategoryComponent,
    CustomerComponent,
    PurchaseProductComponent,
    loginComponent,
    RegisterComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
