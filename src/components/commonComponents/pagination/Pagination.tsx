import c from "./pagination.module.scss";
import { Pagination as MUIPagination } from "@mui/material";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { usePortion, UsePortionPortionNameType } from "../../../hooks/usePortion";

export type PaginationNameType = 'basket' | 'allGoods' | 'kits';

type Props = {
    itemsLength: number
    name: PaginationNameType
    portion: number
    className?: string
    hidden?: boolean
}

export const Pagination: React.FC<Props> = ({ itemsLength, name, portion, className, hidden = false }) => {
    let { search } = useLocation();
    const navigate = useNavigate();
    let portionQueryName = name + 'Portion' as UsePortionPortionNameType;
    let currentPortion = usePortion<undefined>(portionQueryName);
    const changePortion = (e: React.ChangeEvent<unknown>, portion: number) => {
        let searchWithoutPortion = search.replace(new RegExp(portionQueryName), '').replace(/\?=\w+/, '') // the first replace leaves '?=portionNumber' so the second one removes it
        portion !== 1 ? navigate({
            search: createSearchParams({
                [portionQueryName]: String(portion)
            }).toString() + searchWithoutPortion
        }) : navigate({ search: searchWithoutPortion });
    };

    let portionsCount = Math.ceil(itemsLength / portion);

    return <MUIPagination className={`${c.pagination} ${hidden && c.paginationHidden} ${className}`} siblingCount={0} page={currentPortion} onChange={changePortion} count={portionsCount} />
}