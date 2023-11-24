import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemServiceService } from 'src/app/shared/item-service.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {

  items: Item[]=[]

  constructor(private itemService: ItemServiceService){}

  ngOnInit():void{
    this.itemService.getItems().subscribe((data)=>{
      this.items = data;
    });
  }

  addToCart(item:Item){
    return this.itemService.addItem(item);
  }

}
