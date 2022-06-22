import { Cards } from "../../commonComponents/cards/Cards";
import { OrderCustomMerch } from "../../commonComponents/orderCustormMerch/OrderCustomMerch";
import c from "./allGoods.module.scss";
import { AllGoodsCategories } from "../../commonComponents/allGoodsCategories/AllGoodsCategories";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllGoodsItemsSelector } from "../../../redux/selectors";
import { wordToPathHelper } from "../../../helpers/wordToPathHelper";
import { useLayoutEffect } from "react";

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
        filtredItems = splitedPathname.length !== 0
        ? cardsItems.filter(i => splitedPathname[1] === undefined ? wordToPathHelper(i.category.eng) === splitedPathname[0] : wordToPathHelper(i.subcategory.eng) === splitedPathname[1])
        : cardsItems;
    };

    useLayoutEffect(() => {
        const children = document.querySelector(`.${c.categoriesContainer}`)!.children
        const childrenLength = children.length;
        if (childrenLength !== 1) {
            const grid = Array.from(children) as HTMLElement[];
            const baseOffset = grid[0].offsetTop;
            const breakIndex = grid.findIndex(i => i.offsetTop > baseOffset);
            const numPerRow = breakIndex === -1 ? grid.length : breakIndex;
            for (let i = 1; i <= Math.floor(childrenLength / numPerRow); i++) {
                children[i * numPerRow - 1].querySelector('ul')!.setAttribute('style', 'right: 0; left: auto!important')
                let second = children[i * numPerRow - 2].querySelector('ul');
                if (second) {
                    second!.setAttribute('style', 'right: 0; left: auto!important')
                }
                let third = children[i * numPerRow - 3].querySelector('ul')
                if (third) {
                    third!.setAttribute('style', 'right: 0; left: auto!important')
                }
            }
        }
    }, [cardsItems])

    return <>
        <section className={c.allGoods}>
            <AllGoodsCategories container={false} categoriesContainer={c.categoriesContainer} />
            <Cards paginationName="allGoods" items={filtredItems} portion={1} />
        </section>
        <OrderCustomMerch />
    </>
};