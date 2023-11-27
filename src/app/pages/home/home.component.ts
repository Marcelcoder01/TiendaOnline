import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imagen: string[] = [
    "../../../assets/img/fondo2.png",
    "../../../assets/img/fondo3.png"];

  currentImageIndex: number = 0;

  ngOnInit(){
    setInterval(()=>{
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagen.length;
  },5000);
  }
}
