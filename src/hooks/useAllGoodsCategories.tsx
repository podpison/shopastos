import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currentLanguageHelper } from "../helpers/currentLanguageHelper";
import { wordToPathHelper } from "../helpers/wordToPathHelper";
import { getAllGoodsItemsSelector } from "../redux/selectors";
import { RusEngTextType } from "../redux/store";
import { useBreadcrumbsCallback } from "./useBreadcrumbsCallback";

type CategoriesType = {
    category: RusEngTextType
    subcategories: RusEngTextType[]
}[];

export const useAllGoodsCategories = (categoryContainerClassName: string, subcategoriesContainerClassName: string) => {
    let itemsData = useSelector(getAllGoodsItemsSelector);
    let breadcrumbsCallback = useBreadcrumbsCallback();
    let addBreadcrumb = (category: RusEngTextType, subcategory?: RusEngTextType) => {
        breadcrumbsCallback(category);
        subcategory && breadcrumbsCallback(subcategory);
    };
    let categories = [] as CategoriesType;
    for (let item of itemsData) { //creating categories
        let currentCategory = categories.find(c => c.category.eng === item.category.eng);
        if (currentCategory) { //check if the subcategory already exist
            let currentSubcategory = currentCategory.subcategories.find(s => s.eng === item.subcategory.eng);
            if (!currentSubcategory) { //add a new one
                currentCategory.subcategories.push(item.subcategory);
            }
        } else { //create a new item
            categories.push({ category: item.category, subcategories: [item.subcategory] });
        };
    };

    //only uniqe categories
    //es6 magic
    let dataForItems = itemsData.filter((value, index, self) => index === self.findIndex((t) => (t.category.eng === value.category.eng)));
    let Items = dataForItems.map((i, index) => {
        let linkPath = `/allGoods/${wordToPathHelper(i.category.eng)}`;
        let subcategories = categories.find(c => c.category.eng === i.category.eng)?.subcategories;
        let Subcategories = subcategories?.map((s, index) => <li onClick={() => addBreadcrumb(i.category, s)} key={index}><Link to={linkPath + '/' + wordToPathHelper(s.eng)}>{currentLanguageHelper(s)}</Link></li>);
        return <ul className={categoryContainerClassName} key={index}>
            <li onClick={() => addBreadcrumb(i.category)}><Link to={linkPath}>{currentLanguageHelper(i.category)}</Link></li>
            <ul className={subcategoriesContainerClassName}>{Subcategories}</ul>
        </ul>
    });
    return Items;
};