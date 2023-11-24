import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private apiURL = "http://localhost:3000/items"
  private apiURL2 = "http://localhost:3000/items2"


  //Lista carrito
  private myList: Item[] = [];

  //Carrito observable
  private myCart = new BehaviorSubject<Item[]>([]);
  myCart$ = this.myCart.asObservable()

  constructor( private http: HttpClient ) { }

  //Lista de elementos para las tarjetas
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiURL)
  }

  getItems2(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiURL2)
  }

  //Función para añadir elementos al carrito
  addItem(item:Item){
      this.myList.push(item)
      this.myCart.next(this.myList);
    }

  deleteItem(id: number){
    let myList2 = this.myList.filter(function(item){
      return item.id !== id
    });
    this.myList = myList2
    this.myCart.next(this.myList)
  }

  }


