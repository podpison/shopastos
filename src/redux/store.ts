import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { staticReducer } from "./staticReducer";
import { customerReducer } from "./customerReducer";
import { breadcrumbsReducer } from "./breadcrumbsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const reducers = combineReducers({
    static: staticReducer,
    customer: customerReducer,
    breadcrumbs: breadcrumbsReducer
});

type Reducers = typeof reducers;
export type StateType = ReturnType<Reducers>;

type Properties<T> = T extends{[key: string]: infer U} ? U : never;
export type ActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<Properties<T>>;

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type RusEngTextType = {
    rus: string
    eng: string
}
export type RusEngArrayTextType = {
    rus: string[]
    eng: string[]
}