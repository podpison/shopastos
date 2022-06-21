import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStaticItems, StaticReducerStateKeysType } from "../redux/reducers/staticReducer";

export const useStaticItems = (itemsName: StaticReducerStateKeysType) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems(itemsName));
    }, [dispatch, itemsName]);
};