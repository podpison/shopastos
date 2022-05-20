import { useTranslation } from "react-i18next";
import { AllGoodsCategories } from "../allGoodsCategories/AllGoodsCategories";
import { NavLink } from "./NavLink";
import c from "./navLinks.module.scss";

type Props = {
    closeBurger?: () => void
    className: string
    mainPageLink?: boolean
    categoriesClassName?: string
}

export const NavLinks: React.FC<Props> = ({closeBurger, className, mainPageLink, categoriesClassName = ''}) => {
    const { t } = useTranslation();
    
    return <div className={`${c.navLinksContainer} ${className}`}>
        {mainPageLink && <NavLink onClick={closeBurger} to='/'>{t('header.navLinks.main')}</NavLink>}
        <NavLink onClick={closeBurger} to='/kits'>{t('header.navLinks.kits')}</NavLink>
        <AllGoodsCategories onClick={closeBurger} categoriesContainer={`${c.categoriesContainer} ${categoriesClassName}`} />
        <NavLink onClick={closeBurger} to='/sewing'>{t('header.navLinks.sewing')}</NavLink>
        <NavLink onClick={closeBurger} to='/production'>{t('header.navLinks.production')}</NavLink>
        <NavLink onClick={closeBurger} to='/information'>{t('header.navLinks.information')}</NavLink>
    </div>
};