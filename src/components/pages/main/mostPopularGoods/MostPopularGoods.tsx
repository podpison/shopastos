import { useSelector } from "react-redux";
import { getAllGoodsItemsSelector } from "../../../../redux/selectors";
import { Item } from "./Item";
import c from "./../mainPage.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const MostPopularGoods: React.FC = () => {
    let Items = useSelector(getAllGoodsItemsSelector).filter(i => i.priority !== undefined).map((i, index) => <Item name={i.name} category={i.category} subcategory={i.subcategory} img={i.img} priority={i.priority} key={index} />);
    const { t } = useTranslation();

    return <div className={c.mostPopularGoods}>
        <div className={c.mostPopularGoodsContent}>
            <div className={c.textsContainer}>
                <div className={c.texts}>
                    <h3 className={c.article}>{t('mainPage.mostPopularGoods.article')}</h3>
                    <p className={c.sign}>{t('mainPage.mostPopularGoods.sign')}</p>
                </div>
                <Link to='/allGoods' className={c.allGoodsSign}>{t('mainPage.mostPopularGoods.link')}</Link>
            </div>
            <div className={c.itemsContainer}>{Items}</div>
        </div>
    </div>
};