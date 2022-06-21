import { ActionsType, RusEngTextType } from "../store";

const initialState = {
    items: [] as RusEngTextType[]
};

type Actions = ActionsType<typeof breadcrumbsReducerActions>;

export const breadcrumbsReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case 'BREADCRUMBS-REDUCER/SET-ITEM-STATUS':
            let newItems = action.status === 'add'
            ? [...state.items].concat(action.item)
            : [...state.items].filter(i => i.eng !== action.item.eng);
            return { ...state, items: newItems };
        case 'BREADCRUMBS-REDUCER/SET-FILTRED-ITEMS':
            return { ...state, items: action.items };
        default:
            return { ...state };
    };
};

export const breadcrumbsReducerActions = {
    setItemStauts: (item: RusEngTextType, status: 'delete' | 'add') => ({ type: 'BREADCRUMBS-REDUCER/SET-ITEM-STATUS', item, status } as const),
    setFiltredItems: (items: RusEngTextType[]) => ({ type: 'BREADCRUMBS-REDUCER/SET-FILTRED-ITEMS', items } as const)
};