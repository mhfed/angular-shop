import { NgModule } from '@angular/core';
import { AdminComponent } from './layouts/admin/admin.component';
import { WebsiteComponent } from './layouts/website/website.component';

import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/admin/product/product.component';

const routes: Routes = [
  { path: '', component: WebsiteComponent },
  {
    path: 'admin',
    component: AdminComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'product', // child route path
        component: ProductComponent, // child route component that the router renders
      },
    ],
  },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'product', component: ProductsComponent },
  // { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
