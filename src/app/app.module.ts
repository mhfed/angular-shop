import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TableComponent } from './components/table/table.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './layouts/admin/admin.component';
import { WebsiteComponent } from './layouts/website/website.component';
import { SidebarComponent } from './shared/admin/sidebar/sidebar.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TableComponent,
    NotfoundComponent,
    AdminComponent,
    WebsiteComponent,
    SidebarComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
