import { useSelector } from "react-redux";
import { NavLink } from "../navLinks/NavLink";
import { Link } from "react-router-dom";
import { getAllGoodsItemsSelector } from "../../../redux/selectors";
import { RusEngTextType } from "../../../redux/store";
import c from "./allGoodsCategories.module.scss";
import { wordToPathHelper } from "./../../../helpers/wordToPathHelper";
import { currentLanguageHelper } from "./../../../helpers/currentLanguageHelper";
import { useTranslation } from "react-i18next";

type Props = {
    categoriesContainer: string
    onClick?: () => void
}

type CategoriesType = {
    category: RusEngTextType
    subcategories: RusEngTextType[]
}[]

export const AllGoodsCategories: React.FC<Props> = ({categoriesContainer, onClick}) => {
    let itemsData = useSelector(getAllGoodsItemsSelector);
    const { t } = useTranslation();
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
        let editedCategoryName = wordToPathHelper(i.category.eng);
        let linkPath = `/allGoods/${editedCategoryName}`;
        let subcategories = categories.find(c => c.category.eng === i.category.eng)?.subcategories;
        let Subcategories = subcategories?.map((s, index) => <li key={index}><Link to={linkPath + '/' + wordToPathHelper(s.eng)}>{currentLanguageHelper(s)}</Link></li>);
        return <ul className={c.categoryContainer} key={index}>
            <li><Link to={linkPath}>{currentLanguageHelper(i.category)}</Link></li>
            <ul className={c.subcategoriesContainer}>{Subcategories}</ul>
        </ul>
    });

    return <ul onClick={onClick} className={`${c.categoriesContainer} ${categoriesContainer}`}>
        <li><NavLink to='/allGoods'>{t('allGoods.categories.allGoods')}</NavLink></li>
        {Items}
    </ul>
};