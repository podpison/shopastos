import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import c from "./../mainPage.module.scss";
import { currentLanguageHelper } from "./../../../../helpers/currentLanguageHelper";
import { IAllGoodsItem, IItem } from "../../../../redux/staticReducer";
import { pathToGoodHelper } from "../../../../helpers/pathToGoodHelder";

type Props = {
    item: IAllGoodsItem | IItem
}

export const Item: React.FC<Props> = (props) => {
    const { t } = useTranslation();
    let { priority, img, name } = props.item;
    let path = pathToGoodHelper(props.item);

    return <Link className={c['good' + priority]} to={path}>
        <img alt={t('alts.good')} src={img} />
        <p className={c.name}>{currentLanguageHelper(name)}</p>
    </Link>
};