import { useTranslation } from "react-i18next";
import c from "./header.module.scss";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useModalStatus } from "../../../hooks/useModalStatus";
import { useSelector } from "react-redux";
import basketImg from "./../../../static/img/commonComponents/card/basket.png";
import { getBasketItemsSelector } from "../../../redux/selectors";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";

type Props = {
    closeBurger?: () => void
}

export const LanguageAndBasket: React.FC<Props> = ({closeBurger}) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        closeBurger && closeBurger();
        i18n.changeLanguage(lng);
        localStorage.setItem('lng', lng);
    };
    let currentLng = currentLanguageHelper<null>(null);

    const openBasket = useModalStatus('open', 'basket');
    let basketItemsLength = useSelector(getBasketItemsSelector).length;

    return <>
        <Link onClick={closeBurger} to={openBasket}>
            <Badge anchorOrigin={{ vertical: 'top', horizontal: 'right' }} invisible={basketItemsLength === 1} badgeContent={basketItemsLength} color='success'><img className={c.basket} alt={t('alts.basket')} src={basketImg} /></Badge>
        </Link>
        <div className={c.languages}>
            <p onClick={() => changeLanguage('rus')} className={currentLng === 'rus' ? c.active : ''}>{t('header.language.rus')}</p> / <p className={currentLng === 'eng' ? c.active : ''} onClick={() => changeLanguage('eng')}>{t('header.language.eng')}</p>
        </div>
    </>
};