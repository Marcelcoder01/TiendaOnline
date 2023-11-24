import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemServiceService } from 'src/app/shared/item-service.service';

@Component({
  selector: 'app-item2-card',
  templateUrl: './item2-card.component.html',
  styleUrls: ['./item2-card.component.css']
})
export class Item2CardComponent {

  items: Item[]=[]

  constructor(private itemService: ItemServiceService){}

  ngOnInit():void{
    this.itemService.getItems2().subscribe((data)=>{
      this.items = data;
    });
  }

  addToCart(item:Item){
    return this.itemService.addItem(item);
  }

}
