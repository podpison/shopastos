import { NavLinks } from "../navLinks/NavLinks";
import c from "./footer.module.scss";
import { useTranslation } from "react-i18next";

export const Categories: React.FC = () => {
    const { t } = useTranslation();

    return <div className={c.categoriesContainer}>
        <h4 className={c.article}>{t('footer.categoriesSign')}</h4>
        <NavLinks className={c.navLinksContainer} />
    </div>
};