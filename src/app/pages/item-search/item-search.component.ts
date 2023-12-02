import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemServiceService } from 'src/app/shared/item-service.service';


@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent {

  searchResults: Item[] = []

  constructor(private route: ActivatedRoute, private itemService: ItemServiceService) {}

  ngOnInit() {
 // Recupera el parámetro 'results' de la URL, a través del
 // queryParams el ActivatedRoute, que funciona como un observable,
 // siendo la ruta activa la actual, y al suscribirte siendo un observable,
 // reaccionará a los cambios
 this.route.queryParams.subscribe(data =>{
  const resultsString = data['results']; //Obviamente data sería toda la URL, por lo que debemos especificarle
  //que nos interesa solamente la clave 'results', la cual definimos en el componente header ts y ahora la guardamos en la constante
  //resultString

  if (resultsString) {  //si se detecta algo de 'results', osea alguna información en las querys bajo la clave 'results', entonces se ejecuta el resto
    const resultsArray = JSON.parse(resultsString); // parseamos la query para transformarla en un objeto

    this.searchResults = resultsArray;
  }

 });
}

  addToCart(item:Item){
    return this.itemService.addItem(item);
  }
}
