import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { ItemsComponent } from './pages/items/items.component';
import { Items2Component } from './pages/items2/items2.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ItemSearchComponent } from './pages/item-search/item-search.component';



const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'cart', component:CartComponent },
  { path: 'itemDetail', component:ItemDetailsComponent},
  { path: 'items', component:ItemsComponent },
  { path: 'items2', component:Items2Component },
  { path: 'contact', component:ContactFormComponent },
  { path: 'item-search', component: ItemSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
