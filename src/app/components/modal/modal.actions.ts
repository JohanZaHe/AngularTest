import { Action } from '@ngrx/store';
import { Item } from '../item/model/item.model';

export const SET_DATA_MODAL = '[SET DATA MODAL] Enviar data a modal';

export class SetDataModalAction implements Action {
    readonly type = SET_DATA_MODAL;
    constructor(public item: Item) { }
}

export type acciones = SetDataModalAction;