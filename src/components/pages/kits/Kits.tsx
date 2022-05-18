import { Cards } from "../../commonComponents/cards/Cards";
import { GoodsInformation } from "../../commonComponents/goodsInformation/GoodsInformation";
import { OrderKit } from "./OrderKit";
import c from "./kits.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getKitItemsSelector } from "../../../redux/selectors";

export const Kits: React.FC = () => {
    const { t } = useTranslation();
    let cardsItems = useSelector(getKitItemsSelector);
    return <div>
        <Cards items={cardsItems} article={t('kits.article')} portion={2} className={c.cards} />
        <GoodsInformation />
        <OrderKit />
    </div>
};