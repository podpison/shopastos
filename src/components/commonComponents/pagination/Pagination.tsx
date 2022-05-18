import c from "./pagination.module.scss";
import { Pagination as MUIPagination } from "@mui/material";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { usePortion } from "../../../hooks/usePortion";

type Props = {
    itemsLength: number
    portion: number
    className?: string
    hidden?: boolean
}

export const Pagination: React.FC<Props> = ({itemsLength, portion, className, hidden = false}) => {
    let { pathname, search } = useLocation();
    const navigate = useNavigate();
    let portionQueryName = pathname.split('/')[1] + 'Portion'; // 'pageNamePortion'
    let currentPortion = usePortion<undefined>();
    const changePortion = (e: React.ChangeEvent<unknown>, portion: number) => {
        let searchWithoutPortion = search.replace(new RegExp(portionQueryName), '').replace(/\?=\w+/, '') // the first replace leaves '?=portionNumber' so the second one removes it
        portion !== 1 ? navigate({
            search: createSearchParams({
                [portionQueryName]: String(portion)
            }).toString() + searchWithoutPortion
        }) : navigate({search: searchWithoutPortion});
    };
    
    let portionsCount = Math.ceil(itemsLength / portion);

    return <MUIPagination className={`${c.pagination} ${hidden && c.paginationHidden} ${className}`} page={currentPortion} onChange={changePortion} count={portionsCount} />
}