import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RusEngTextType } from "../../../../redux/store";
import c from "./../mainPage.module.scss";
import { wordToPathHelper } from "./../../../../helpers/wordToPathHelper";

type Props = {
    name: RusEngTextType
    subcategory: RusEngTextType
    category: RusEngTextType
    img: string
    priority: 0 | 1 | 2 | 3 | undefined //it won't get undefined. I put it here to compile files
}

export const Item: React.FC<Props> = ({ name, subcategory, category, img, priority}) => {
    const { t } = useTranslation();

    return <Link className={c['good' + priority]} to={`/allGoods/${wordToPathHelper(category.eng)}/${wordToPathHelper(subcategory.eng)}?item=${wordToPathHelper(name.eng)}`}>
        <img alt={t('alts.good')} src={img} />
    </Link>
};