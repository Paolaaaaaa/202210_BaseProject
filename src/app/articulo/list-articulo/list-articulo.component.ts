import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-list-articulo',
  templateUrl: './list-articulo.component.html',
  styleUrls: ['./list-articulo.component.css']
})
export class ListArticuloComponent implements OnInit {

  articulos: Array<Articulo>=[];
  promCost : number=0;
  selected: boolean = false;
  selectedArticulo!:Articulo;
  totalArticulos: number=0;
  avgListo: boolean= true;

  constructor( private articuloService: ArticuloService) { }

  ngOnInit() {
    this.getarticulos();
    this.avgPrice();



  }

  avgPrice(): void
  {
    this.totalArticulos =0;
    this.articulos.forEach((articulo)=> this.totalArticulos=articulo.price+ this.totalArticulos);
    this.promCost = (this.totalArticulos.valueOf()/(this.articulos.length).valueOf());





  }
  setArticulos (): void
  {
    this.getarticulos();
    this.avgPrice();
    this.avgListo =true;


  }

  getarticulos():void
  {
    this.articuloService.getArticulos().subscribe((articulo)=>
    {
      this.articulos =articulo;

    });



  }





  detail(articulo: Articulo):void
  {
    this.selected = true;
    this.selectedArticulo = articulo;
    this.avgPrice();


  }




}
