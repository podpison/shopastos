import { useTranslation } from "react-i18next";
import { WeCooperateWithDataType } from "../../../../redux/reducers/staticReducer";

export const Item: React.FC<WeCooperateWithDataType> = ({img, link}) => {
    const { t } = useTranslation();

    return <a href={link}>
        <img src={img} alt={t('alts.logoOfTheBrandWeCooperatiedWith')} />
    </a>
};