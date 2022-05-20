import { useLocation } from "react-router-dom";

type ReturnType<T> = T extends undefined ? number : JSX.Element[];

export function usePortion<T> (portionName: string, items?: JSX.Element[], portionSize?: number): ReturnType<T> {
    const { search } = useLocation();
    let currentPortion = search.includes(portionName) ? Number(search.replace(new RegExp(portionName), '').replace(/\?=/, '')) : 1;
    if (items && portionSize) {
        //@ts-ignore
        return items.slice(portionSize * currentPortion - portionSize, portionSize * currentPortion);
    }
    //@ts-ignore
    return currentPortion;
};