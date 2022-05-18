import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { currentLanguageHelper } from "../../../../helpers/currentLanguageHelper";
import { RusEngTextType } from "../../../../redux/store";
import c from "./../whatWeCanDo.module.scss";

type Props = {
    name: RusEngTextType
    img: string
    operationType: 'sew' | 'create'
};

export const Item: React.FC<Props> = ({ name, img, operationType }) => {
    const { t } = useTranslation();

    let pathToContent = `/${operationType === 'sew' ? 'sewing' : 'production'}/${name.eng.toLowerCase()}`;
    return <Link className={c.itemContainer} to={pathToContent}>
        <img className={c.img} alt={t('alts.product')} src={img} />
        <p className={c.name}>{currentLanguageHelper(name)}</p>
    </Link>
};