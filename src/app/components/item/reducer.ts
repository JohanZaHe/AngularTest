import * as fromItem from "./item.actions";
import { Item } from './model/item.model';

const item1 = new Item('Medellín, Colombia', 'San Andrés, Colombia', 2, 100000, true, false);
const item2 = new Item('Santa Marta, Colombia', 'Cali, Colombia', 2, 20000, false, true);
const item3 = new Item('Acalpuco, México', 'Madrid, Esapaña', 1, 140000, false, false);


const estadInicial: Item[] = [item1, item2, item3];

export function itemReducer(state = estadInicial, action: fromItem.Acciones): Item[] {
    switch (action.type) {
        case fromItem.AGREGAR_ITEM:
            const item = new Item(action.origen, action.destino, action.cantidad, action.precio, action.favorito, action.sale);
            return [...state, item];
            break;
        case fromItem.FAVORITE_ITEM:
            return state.map(itemFavorite => {
                if (itemFavorite.id === action.id) {
                    return {
                        ...itemFavorite,
                        favorito: !itemFavorite.favorito
                    }
                } else {
                    return itemFavorite;
                }
            })
            break;
        case fromItem.SALE_ITEM:
            return state.map(itemFavorite => {
                if (itemFavorite.id === action.id) {
                    return {
                        ...itemFavorite,
                        sale: !itemFavorite.sale
                    }
                } else {
                    return itemFavorite;
                }
            })
            break;
        case fromItem.EDIT_ITEM:
            return state.map(itemFavorite => {
                if (itemFavorite.id === action.id) {
                    return {
                        ...itemFavorite,
                        estado: action.status
                    }
                } else {
                    return itemFavorite;
                }
            })
            break;
        case fromItem.DELETE_ITEM:
            return state.filter(item=>item.id!==action.id);
            break;
        default:
            return state;
            break;
    }
}