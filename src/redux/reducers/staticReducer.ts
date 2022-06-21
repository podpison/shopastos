import { Dispatch } from "redux";
import { itemsAPI } from "../../api/api";
import { ActionsType, RusEngArrayTextType, RusEngTextType } from "../store";

export interface IItemPopUp {
    description: RusEngTextType
    images: string[]
    sizes: string[]
    characteristics: {
        name: RusEngTextType,
        characteristic: RusEngArrayTextType
    }[]
}

export interface IItem {
    img: string
    name: RusEngTextType
    price: number
    priority?: 0 | 1 | 2 | 3 
    discount?: string
    popUpData: IItemPopUp
};

export type WeCooperateWithDataType = {
    img: string
    link: string
};

export interface IWhatWeCanDo {
    img: string
    name: RusEngTextType
    content: {
        productImg: string
        productExampleImg: string
        description: RusEngTextType
        material: {
            description: RusEngTextType
            materials: RusEngArrayTextType
        }
        howToOrderSign: RusEngTextType
        paintingTypes: {
            description: RusEngTextType
            types: RusEngArrayTextType
        }
        productCareDescription: RusEngArrayTextType
    }
};

export interface IWhatWeCanSew extends IWhatWeCanDo {
    content: {
        sizes: string[]
    } & IWhatWeCanDo['content']
};
export interface IWhatWeCanCreate extends IWhatWeCanDo {

};

export interface IAllGoodsItem extends IItem {
    category: RusEngTextType
    subcategory: RusEngTextType
};

const initialState = {
    weCooperateWithData: [] as WeCooperateWithDataType[],
    whatWeCanSew: [] as IWhatWeCanSew[],
    allGoodsItems: [] as IAllGoodsItem[],
    whatWeCanCreate: [] as IWhatWeCanCreate[],
    kitItems: [] as IItem[],
};

export type StaticReducerStateKeysType = keyof typeof initialState;

type Actions = ActionsType<typeof staticActions>;

export const staticReducer = (state = initialState, action: Actions) => {
    switch(action.type) {
        case 'STATIC-REDUCER/SET-ITEMS':
            return { ...state, [action.itemsName]: action.items };
        default:
            return {...state};
    };
};

export const staticActions = {
    setItems: (itemsName: string, items: Object[]) => ({type: 'STATIC-REDUCER/SET-ITEMS', itemsName, items} as const)
}

export const getStaticItems = (itemsName: string) => async (dispatch: Dispatch) => {
    let items = await itemsAPI.getItems(itemsName);
    dispatch(staticActions.setItems(itemsName, items));
};