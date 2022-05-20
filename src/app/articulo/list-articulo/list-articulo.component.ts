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


  constructor( private articuloService: ArticuloService) { }

  ngOnInit() {
    this.getarticulos();


  }

  getarticulos():void
  {
    this.articuloService.getArticulos().subscribe((articulo)=>
    {
      this.articulos =articulo;

    });
    this.avgPrice();

  }


  avgPrice(): void
  {
    let totalArticulo: number =0;
    let promedio: number= 0;
    this.articulos.forEach((articulo)=> totalArticulo=articulo.price+totalArticulo);
    promedio = totalArticulo/this.articulos.length;


    this.promCost = promedio;


  }




}
