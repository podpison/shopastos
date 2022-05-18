import { StateType } from "./store";

//STATIC REDUCER SELECTORS
export const getWeCooperateWithDataSelector = (state: StateType) => state.static.weCooperateWithData;
export const getWhatWeCanSewSelector = (state: StateType) => state.static.whatWeCanSew;
export const getAllGoodsItemsSelector = (state: StateType) => state.static.allGoodsItems;
export const getWhatWeCanCreateSelector = (state: StateType) => state.static.whatWeCanCreate;
export const getKitItemsSelector = (state: StateType) => state.static.kitItems;

//CUSTOMER REDUCER SELECTORS
export const getBasketItemsSelector = (state: StateType) => state.customer.basketItems;

//BREADCRUMBS REDUCER SELECTORS
export const getBreadcrumbsItemSelector = (state: StateType) => state.breadcrumbs.items;