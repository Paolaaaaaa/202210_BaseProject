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


  constructor( private articuloService: ArticuloService) { }

  ngOnInit() {
    this.getarticulos();
    this.avgPrice();


  }

  avgPrice(): void
  {
    let totalArticulo: number =0;
    this.articulos.forEach((articulo)=> totalArticulo=articulo.price+totalArticulo);
    this.promCost = totalArticulo/this.articulos.length;
    console.log(totalArticulo);
    console.log(this.promCost);
    console.log(this.articulos);




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


  }




}
