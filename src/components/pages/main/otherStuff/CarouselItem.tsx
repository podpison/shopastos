import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { pathToGoodHelper } from "../../../../helpers/pathToGoodHelder";
import { IAllGoodsItem, IItem } from "../../../../redux/reducers/staticReducer";
import c from "./../mainPage.module.scss";

type Props = {
    item: IAllGoodsItem | IItem
}

export const CarouselItem: React.FC<Props> = (props) => {
    const { t } = useTranslation();
    let { img } = props.item
    let path = pathToGoodHelper(props.item);

    return <Link className={c.item} to={path}>
        <img className={c.img} alt={t('alts.stuff')} src={img} />
    </Link>
};