import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { breadcrumbsReducerActions } from "../redux/reducers/breadcrumbsReducer";
import { RusEngTextType } from "../redux/store";

export const useBreadcrumbs = (item: RusEngTextType, isCardPopUpOpen?: boolean) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (isCardPopUpOpen === true || isCardPopUpOpen === undefined) {
            dispatch(breadcrumbsReducerActions.setItemStauts(item, 'add'));
        }
        return () => {
            dispatch(breadcrumbsReducerActions.setItemStauts(item, 'delete'));
        };
    }, [dispatch]); //eslint-disable-line react-hooks/exhaustive-deps
};