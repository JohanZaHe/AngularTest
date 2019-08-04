import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { SetFiltroAction, SetFiltroEstado } from '../../filter/filter.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  filterFavorite: boolean = false;
  filterSale:boolean = false;
  status:string='';

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  filter(){ 
    let accion = this.filterFavorite && this.filterSale ? new SetFiltroAction('favoritos&sale') : 
    this.filterFavorite? new SetFiltroAction('favoritos') : this.filterSale ? new SetFiltroAction('sale') : new SetFiltroAction('todos');

    this.store.dispatch(accion);
  }

  search(){
    let accion;
    this.filterFavorite = false;
    this.filterSale =  false;
    if(this.status.trim()!=''){
      accion = new SetFiltroEstado(this.status);
    }else{
      accion = new SetFiltroAction('todos');
    }
    this.store.dispatch(accion);
  }

}
