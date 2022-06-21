import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { staticReducer } from "./reducers/staticReducer";
import { customerReducer } from "./reducers/customerReducer";
import { breadcrumbsReducer } from "./reducers/breadcrumbsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { alertReducer } from "./reducers/alertReducer";

const reducers = combineReducers({
    static: staticReducer,
    customer: customerReducer,
    breadcrumbs: breadcrumbsReducer,
    alert: alertReducer,
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