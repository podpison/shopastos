import { useLocation } from "react-router-dom";

type ReturnType<T> = T extends undefined ? number : JSX.Element[];

export function usePortion<T> (items?: JSX.Element[], portionSize?: number): ReturnType<T> {
    const { pathname, search } = useLocation();
    let portionQueryName = pathname.split('/')[1] + 'Portion'; // 'pageNamePortion'
    let currentPortion = search.includes(portionQueryName) ? Number(search.replace(new RegExp(portionQueryName), '').replace(/\?=/, '')) : 1;
    if (items && portionSize) {
        //@ts-ignore
        return items.slice(portionSize * currentPortion - portionSize, portionSize * currentPortion);
    }
    //@ts-ignore
    return currentPortion;
};