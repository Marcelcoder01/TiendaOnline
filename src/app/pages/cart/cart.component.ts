import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemServiceService } from 'src/app/shared/item-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  ItemsCart: Item[] = []

  constructor(private itemService: ItemServiceService){
   this.itemService.myCart$.subscribe((data)=> this.ItemsCart = data)}

  // myCart$ = this.itemService.myCart$.subscribe((data)=> this.ItemsCart = data)

    total():number{
      return this.ItemsCart.reduce((total, item) => total + item.price, 0)
    }

    deleteItem(id:number){
      this.itemService.deleteItem(id);
    }

}
