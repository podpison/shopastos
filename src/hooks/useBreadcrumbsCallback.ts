import { wordToPathHelper } from "../helpers/wordToPathHelper";
import { getBreadcrumbsItemSelector } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { breadcrumbsReducerActions } from "../redux/reducers/breadcrumbsReducer";
import { RusEngTextType } from "../redux/store";

export const useBreadcrumbsCallback = () => {
    const dispatch = useDispatch();
    let items = useSelector(getBreadcrumbsItemSelector);
    useEffect(() => {
        return () => {
            window.screen.width > 899 && dispatch(breadcrumbsReducerActions.setFiltredItems([]));
        }
        //@eslint-disable-next-line
    }, [dispatch]);
    return (item: RusEngTextType) => {
        let filtredItems = items.filter(i => window.location.hash.includes(wordToPathHelper(i.eng)));
        dispatch(breadcrumbsReducerActions.setFiltredItems(filtredItems));
        dispatch(breadcrumbsReducerActions.setItemStauts(item, 'add'));
    };
};