import { Item } from "../item/model/item.model";
import * as fromModal from './modal.actions';

const estadoInicial = new Item('', '', 0, 0, false, false);

export function modalReducer(state = estadoInicial, action: fromModal.acciones): Item {
    switch (action.type) {
        case fromModal.SET_DATA_MODAL:
            return action.item;
            break;
        default:
            return state;
            break;
    }
}