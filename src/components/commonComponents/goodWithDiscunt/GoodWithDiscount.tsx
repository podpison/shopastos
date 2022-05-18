import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllGoodsItemsSelector } from "../../../redux/selectors";
import { wordToPathHelper } from "../../../helpers/wordToPathHelper";
import c from "./goodWithDiscount.module.scss";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";
import { useTranslation } from "react-i18next";

type Props = {
    className: string
}

export const GoodWithDiscount: React.FC<Props> = ({className}) => {
    const { t } = useTranslation();

    let goodWithDiscount = useSelector(getAllGoodsItemsSelector).find(g => g.priority === 3);

    return <Link to={`/allGoods/${wordToPathHelper(goodWithDiscount?.category.eng)}/${wordToPathHelper(goodWithDiscount?.subcategory.eng)}?item=${wordToPathHelper(goodWithDiscount?.name.eng)}`} className={`${c.goodWithDiscountContainer} ${className}`}>
        <p className={c.goodWithDiscount}>{currentLanguageHelper(goodWithDiscount?.name)} {t('goodWithDiscount.withDiscount')} - {goodWithDiscount?.discount} %</p>
        <img className={c.img} alt={t('alts.goodWithDiscount')} src={goodWithDiscount?.img} />
    </Link>
};