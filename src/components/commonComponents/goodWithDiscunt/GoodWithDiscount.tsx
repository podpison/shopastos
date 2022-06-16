import { Link } from "react-router-dom";
import c from "./goodWithDiscount.module.scss";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";
import { useTranslation } from "react-i18next";
import { useAllGoods } from "../../../hooks/useAllGoods";
import { pathToGoodHelper } from "../../../helpers/pathToGoodHelder";

type Props = {
    className: string
}

export const GoodWithDiscount: React.FC<Props> = ({className}) => {
    const { t } = useTranslation();

    let goodWithDiscount = useAllGoods().find(g => g.priority === 3);
    let path = pathToGoodHelper(goodWithDiscount)

    return <Link to={path} className={`${c.goodWithDiscountContainer} ${className}`}>
        <p className={c.goodWithDiscount}>{currentLanguageHelper(goodWithDiscount?.name)} {t('goodWithDiscount.withDiscount')} - {goodWithDiscount?.discount} %</p>
        <img className={c.img} alt={t('alts.goodWithDiscount')} src={goodWithDiscount?.img} />
    </Link>
};