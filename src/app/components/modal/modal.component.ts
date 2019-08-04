import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Item } from '../item/model/item.model';
import { CambiarItemFavoritoAction, CambiarItemSaleAction, EditarItemAction, DeleteItemAction } from '../item/item.actions';

declare var $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  item:Item;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.startElement();
    this.store.select('modal').subscribe(rest=>{
        this.item = rest;
    });
  }

  startElement(){
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
  }

  close(){
    $('.modal').modal('close');
  }

  changeFavorite(id){
    const accion = new CambiarItemFavoritoAction(id);
    this.store.dispatch(accion);
    this.item.favorito = !this.item.favorito;
  }

  changeSale(id){
    const accion = new CambiarItemSaleAction(id);
    this.store.dispatch(accion);
    this.item.sale = !this.item.sale;
  }

  changeStatus(id,estado){
    const accion = new EditarItemAction(id,estado);
    this.store.dispatch(accion);
    this.item.estado = estado;
    $('.dropdown-trigger').dropdown('close');
  }

  deleteItem(id){
    const accion = new DeleteItemAction(id);
    this.store.dispatch(accion);
    this.close();
  }
}
