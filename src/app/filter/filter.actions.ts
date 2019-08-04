import { Action } from '@ngrx/store';

export const SET_FILTRO = '[Filter] Set Filtro';
export const SET_FILTRO_ESTADO = '[Filter status] Set Filtro Status';

export type filtroValidos = 'todos' | 'favoritos' | 'sale' | 'favoritos&sale' | 'estado';


export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;

    constructor(public filtro: filtroValidos) {

    }
}

export class SetFiltroEstado implements Action {
    readonly type = SET_FILTRO_ESTADO;

    constructor(public status: string) { }
}

export type acciones = SetFiltroAction | SetFiltroEstado;