import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Articulo } from './articulo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }



  getSeries ():Observable<Articulo[]>
  {
      var url = 'https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/master/json/clothingitems.json ';
      return this.http.get<Articulo[]> (url);
  }

  }

