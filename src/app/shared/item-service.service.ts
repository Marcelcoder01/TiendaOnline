import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { Item } from '../models/item.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private apiURL = "https://fakestoreapi.com/products/category/men's%20clothing"
  private apiURL2 = "https://fakestoreapi.com/products/category/women's%20clothing"


  //Lista carrito
  private myList: Item[] = [];

  //Carrito observable
  private myCart = new BehaviorSubject<Item[]>([]);
  myCart$ = this.myCart.asObservable() // para desabilitar funciones de edición (como .next) y solo permitir la lectura (suscribe)

  //resultados de la búsqueda
  searchResults: Item[] = [];


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
    let myList2 = this.myList.filter((item)=>{
    return item.id !== id});
    this.myList = myList2;
    this.myCart.next(this.myList);
    console.log(myList2)
  }


//--> FUNCIÓN DEL BUSCADOR

  searchItem(name: string): Observable<Item[]> {
    // Combinamos los resultados de getItems() y getItems2() usando el método forkJoin() y le metemos el array
    //con los observables dentro, y a esta mezcla mediante el metodo pipe y dentro del mismo los métodos map,
    //hacemos dos cosas, unimos los dos observables en uno, y después a ese resultante
    //le aplicamos el filtro para ver si el nombre (title) que le hemos pasado por parámetro coincide
    //con alguno del array resultante de la mezcla de los dos que ahora es uno al que le hemos llamado items.
    return forkJoin([this.getItems(), this.getItems2()]).pipe(
      // Une los resultados en un solo array
      map(([items1, items2]) => [...items1, ...items2]),
      // Aplica la lógica de búsqueda
      map(items => items.filter(item => item.title.toLowerCase().includes(name.toLowerCase())))
    );
  }

  getResults(name: string): Observable<Item[]> {
    return this.searchItem(name)
    }
  }







