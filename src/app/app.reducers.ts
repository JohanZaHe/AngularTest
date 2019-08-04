import { Item } from './components/item/model/item.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromItem from './components/item/reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromModal from './components/modal/modal.reducer';

export interface AppState{
    items: Item[];
    filtro: string;
    modal: Item;
}


export const appReducers: ActionReducerMap<AppState> = {
    items: fromItem.itemReducer,
    filtro: fromFiltro.filtroReducer,
    modal: fromModal.modalReducer
}