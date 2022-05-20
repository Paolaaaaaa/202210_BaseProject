import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticuloComponent } from './list-articulo/list-articulo.component';
import { ArticuloDetailComponent } from './articulo-detail/articulo-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListArticuloComponent,ArticuloDetailComponent],
  exports:[ListArticuloComponent,ArticuloDetailComponent]
})
export class ArticuloModule { }
