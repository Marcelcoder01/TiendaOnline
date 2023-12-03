import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemServiceService } from 'src/app/shared/item-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchTerm: string = "";

  constructor(private itemService: ItemServiceService, public router: Router){}

  search() {
    this.itemService.getResults(this.searchTerm).subscribe(
      (data) => {
        this.router.navigate(['/item-search'], { queryParams: { results: JSON.stringify(data) }});
      }
    );

    //basicamente, le enviamos al servicio el termino que escribimos y nos suscribimos al observable,
    //cuando nos lo devuelve es de tipo array de objeto[], entonces lo convertimos a cadena JSON
    // y lo enviamos a modo de query Params a la ruta /item-search, y a esta query Params le llamamos 'results'

  }
}











// this.itemService.getResults(this.searchTerm).subscribe((data)=>{
//   this.router.navigate(['/item-search'], { queryParams: { results: JSON.stringify(data) } });
//   console.log(data)
// });
