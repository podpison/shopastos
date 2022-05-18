import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { wordToPathHelper } from "../../../../helpers/wordToPathHelper";
import { IAllGoodsItem } from "../../../../redux/staticReducer";
import c from "./../mainPage.module.scss";

export const CarouselItem: React.FC<IAllGoodsItem> = ({img, name, category, subcategory}) => {
    const { t } = useTranslation();

    return <Link className={c.item} to={`/allGoods/${wordToPathHelper(category.eng)}/${wordToPathHelper(subcategory.eng)}?item=${wordToPathHelper(name.eng)}`}>
        <img className={c.img} alt={t('alts.stuff')} src={img} />
    </Link>
};