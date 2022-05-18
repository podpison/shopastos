import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import c from "./footer.module.scss";

export const Information: React.FC = () => {
    const { t } = useTranslation();

    return <div className={c.informationContainer}>
        <h4 className={c.article}>{t('footer.information.article')}</h4>
        <div className={c.linksContainer}>
            <NavLink to='./aboutUs'>{t('footer.information.aboutUsSign')}</NavLink>
            <NavLink to='./FAQ'>{t('footer.information.FAQSign')}</NavLink>
            <NavLink to='./contacts'>{t('footer.information.contactsSign')}</NavLink>
        </div>
    </div>
};