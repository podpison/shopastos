import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import c from "./footer.module.scss";

export const Information: React.FC = () => {
    const { t } = useTranslation();

    return <div className={c.informationContainer}>
        <h4 className={c.article}>{t('footer.information.article')}</h4>
        <div className={c.linksContainer}>
            <NavLink to='/information'>{t('footer.information.aboutUsSign')}</NavLink>
            <HashLink smooth to='/information#FAQ'>{t('footer.information.FAQSign')}</HashLink>
            <HashLink smooth to='/information#contacts'>{t('footer.information.contactsSign')}</HashLink>
        </div>
    </div>
};