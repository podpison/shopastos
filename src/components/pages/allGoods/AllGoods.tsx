import { Cards } from "../../commonComponents/cards/Cards";
import { OrderCustomMerch } from "../../commonComponents/orderCustormMerch/OrderCustomMerch";
import c from "./allGoods.module.scss";
import { AllGoodsCategories } from "../../commonComponents/allGoodsCategories/AllGoodsCategories";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllGoodsItemsSelector } from "../../../redux/selectors";
import { wordToPathHelper } from "../../../helpers/wordToPathHelper";

export type AllGoodsFilterType = {
    filter: string
    isItSubcategory: boolean
} | null

export const AllGoods: React.FC = () => {
    let { pathname, search } = useLocation();
    let cardsItems = useSelector(getAllGoodsItemsSelector);

    let splitedPathname = pathname.split(/[\s/]+/).slice(2); //remove the page name
    let filtredItems = cardsItems;
    if (search.indexOf('item') === -1 || search.indexOf('basket') === -1) {
        filtredItems = splitedPathname.length !== 0 ?
        cardsItems.filter(i => splitedPathname[1] === undefined ? wordToPathHelper(i.category.eng) === splitedPathname[0] : wordToPathHelper(i.subcategory.eng) === splitedPathname[1])
            : cardsItems;
    };

    return <>
        <section className={c.allGoods}>
            <AllGoodsCategories container={false} categoriesContainer={c.categoriesContainer} />
            <Cards paginationName="allGoods" items={filtredItems} portion={1} />
        </section>
        <OrderCustomMerch />
    </>
};