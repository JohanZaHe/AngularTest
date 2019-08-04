import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtroValidos = 'todos';

export function filtroReducer(state= estadoInicial,action:fromFiltro.acciones): fromFiltro.filtroValidos|string{
    switch (action.type) {
        case fromFiltro.SET_FILTRO:
                return action.filtro;
            break;
        case fromFiltro.SET_FILTRO_ESTADO:
                return action.status;
        default:
                return state;
            break;
    }
}