import { Action } from "@ngrx/store";

export const AGREGAR_ITEM = '[ITEM] Agregar item';
export const FAVORITE_ITEM = '[FAVORITE ITEM] Cambiar favorito';
export const SALE_ITEM = '[SALE ITEM] Cambiar sale';
export const EDIT_ITEM = '[EDIT ITEM] Editar item';
export const DELETE_ITEM = '[DELETE ITEM] Eliminar item';

export class AgregarItemAction implements Action{
    readonly type = AGREGAR_ITEM;

    constructor(public origen:string, public destino:string, public cantidad: number, public precio: number, public favorito: boolean, public sale: boolean){}
}

export class CambiarItemFavoritoAction implements Action{
    readonly type = FAVORITE_ITEM;
    constructor(public id:number){}
}

export class EditarItemAction implements Action{
    readonly type = EDIT_ITEM;
    constructor(public id:number, public status:string){}
}

export class DeleteItemAction implements Action{
    readonly type = DELETE_ITEM;
    constructor(public id:number){}
}

export class CambiarItemSaleAction implements Action{
    readonly type = SALE_ITEM;
    constructor(public id:number){}
}

export type Acciones = AgregarItemAction | CambiarItemFavoritoAction | EditarItemAction | DeleteItemAction | CambiarItemSaleAction;