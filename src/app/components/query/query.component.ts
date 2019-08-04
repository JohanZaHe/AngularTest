import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Item } from '../item/model/item.model';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  items:Item[];
  backUpItems: Item[];

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(rest=>{
      this.backUpItems = rest.items;
      this.items = this.filterItems(rest.filtro,rest.items);
    });
  }

  filterItems(filter:string,items:Item[]):Item[]{
    switch (filter) {
      case 'sale':
          return items.filter(item=>item.sale);
        break;
      case 'favoritos':
        return items.filter(item=>item.favorito);
       break;
      case 'favoritos&sale':
         return items.filter(item=>item.favorito && item.sale);
        break;
      case 'todos':
         this.items = [...this.backUpItems];
         return items;
        break;
      default:
         return items.filter(item=>item.estado.indexOf(filter)!==-1);
        break;
    }
  }

  search(event){
    const value = event.target.value;
    if(value.trim()!=''){
    this.items = [...this.backUpItems].filter(item=>item.estado.indexOf(value)!=-1 
                                    || item.destino.indexOf(value)!=-1 
                                    || item.origen.indexOf(value)!=-1 
                                    || item.precio.toString().indexOf(value)!=-1
                                    || item.fecha.indexOf(value)!=-1);
    }else{
      this.items = [...this.backUpItems];
    }
  }
}
