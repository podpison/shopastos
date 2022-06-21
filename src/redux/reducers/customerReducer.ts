import { Dispatch } from "redux";
import { customerAPI } from "../../api/api";
import { ActionsType, RusEngTextType } from "../store";

export type BasketItemType = {
    img: string
    name: RusEngTextType
    price: number
    size?: string
    count: number
}

const initialState = {
    basketItems: [] as BasketItemType[],
};

type Actions = ActionsType<typeof customerReducerActions>;

export const customerReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case "CUSTOMER-REDUCER/ADD-NEW-BASKET-ITEM":
            let newItems = [...state.basketItems]
            let currentItem = newItems.find(i => i.name.eng === action.item.name.eng);
            if (currentItem) {
                currentItem.count++;
            } else {
                newItems = newItems.concat(action.item);
            }
            return { ...state, basketItems: newItems };
        case "CUSTOMER-REDUCER/CHANGE-BASKET-ITEM-COUNT":
            let items = [...state.basketItems];
            let item = items.find(i => i.name.eng === action.name.eng);
            if (!item) return { ...state };
            item.count = action.operation === 'increase' ? item.count + 1 : item.count - 1;
            return { ...state, basketItems: items };
        case "CUSTOMER-REDUCER/DELETE-BASKET-ITEM":
            return { ...state, basketItems: state.basketItems.filter(i => i.name.eng !== action.name.eng) };
        case "CUSTOMER-REDUCER/DELETE-BASKET-ITEMS":
            return { ...state, basketItems: [] };
        default:
            return { ...state };
    };
};

type UserCredentialsType = {
    name: string
    email: string
    phone: string
};

export const customerReducerActions = {
    addNewBasketItem: (item: BasketItemType) => ({ type: 'CUSTOMER-REDUCER/ADD-NEW-BASKET-ITEM', item } as const),
    changeBasketItemCount: (name: RusEngTextType, operation: 'decrease' | 'increase') => ({ type: 'CUSTOMER-REDUCER/CHANGE-BASKET-ITEM-COUNT', name, operation } as const),
    deleteBasketItem: (name: RusEngTextType) => ({ type: 'CUSTOMER-REDUCER/DELETE-BASKET-ITEM', name } as const),
    deleteBasketItems: () => ({ type: 'CUSTOMER-REDUCER/DELETE-BASKET-ITEMS' } as const),
};

export type SetNewManagerClientValueType = UserCredentialsType | { phone: string } | (UserCredentialsType & { basketItems: BasketItemType[] })

export const setNewManagerClient = (data: SetNewManagerClientValueType) => async (dispatch: Dispatch) => {
    customerAPI.setNewManagerClient(data);
};