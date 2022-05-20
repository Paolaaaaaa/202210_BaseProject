import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticuloComponent } from './list-articulo/list-articulo.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListArticuloComponent],
  exports:[ListArticuloComponent]
})
export class ArticuloModule { }
