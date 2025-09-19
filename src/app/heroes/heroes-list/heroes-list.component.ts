import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {

  imageWidth: number=40;
  imageMargin: number=2;
  muestraImage: boolean=true;

  showImage():void{
    this.muestraImage=!this.muestraImage
  }
  heroes:any[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      description:"Kame Hame Ha",
      race:"Saiyan",
      ki:9000
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      description:"Final Flash",
      race:"Saiyan",
      ki:8500
    },
    {
      "imagen":"https://dragonball-api.com/characters/picolo_normal.webp",
       nombre:"Piccolo",
       description:"Makankosappo",
       race:"Namekiano",
       ki:7000
    },
    {
      "imagen":"https://dragonball-api.com/characters/Freezer.webp",
       nombre:"Freezer",
       description:"Death Ball",
       race:"Alien",
       ki:9500
    },
 
  ]
}
