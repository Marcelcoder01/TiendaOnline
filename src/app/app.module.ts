import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { ItemsComponent } from './pages/items/items.component';
import { Item2CardComponent } from './components/item2-card/item2-card.component';
import { Items2Component } from './pages/items2/items2.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemSearchComponent } from './pages/item-search/item-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemCardComponent,
    HomeComponent,
    ItemDetailsComponent,
    CartComponent,
    ItemsComponent,
    Item2CardComponent,
    Items2Component,
    ContactFormComponent,
    ItemSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
