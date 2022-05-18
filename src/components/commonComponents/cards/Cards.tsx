import { Card } from "./Card";
import { useLocation } from "react-router-dom";
import { IAllGoodsItem, IKitItem } from "../../../redux/staticReducer";
import c from "./cards.module.scss";
import { Pagination } from "../pagination/Pagination";
import { usePortion } from "../../../hooks/usePortion";

type Props = {
    items: IAllGoodsItem[] | IKitItem[]
    portion: number
    className?: string
    article?: string
}

export const Cards: React.FC<Props> = ({ items, portion, className, article }) => {
    let { pathname } = useLocation();

    let _Cards = items.map((i, index) => <Card pathname={pathname} {...i} key={index} />);
    let CardsPortion = usePortion<JSX.Element[]>(_Cards, portion);

    return <div id='cards' className={`${c.mainContainer} ${className}`}>
        {article && <h2 className={c.article}>{article}</h2>}
        <div className={c.cardsContainer}>
            {CardsPortion}
        </div>
        <Pagination portion={portion} hidden={_Cards.length < portion} className={c.pagination} itemsLength={items.length} />
    </div>
};