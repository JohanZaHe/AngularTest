import { Component, OnInit, Input, Output } from '@angular/core';
import { Item } from './model/item.model';
import { EventEmitter } from 'events';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { SetDataModalAction } from '../modal/modal.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  sendItem(item){
    const accion = new SetDataModalAction(item);
    this.store.dispatch(accion);
  }

}
