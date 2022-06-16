import { Hidden, Toolbar } from "@mui/material";
import BurgerIcon from "@mui/icons-material/MenuOutlined";
import c from "./header.module.scss";
import { NavLinks } from "../navLinks/NavLinks";
import logo from "./../../../static/img/commonComponents/logo.png";
import { Search } from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import { LanguageAndBasket } from "./LanguageAndBasket";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./../button/Button";
import { GoodWithDiscount } from "../goodWithDiscunt/GoodWithDiscount";
import { useState, useEffect } from "react";

type Props = {
    setBurgerStatus: (status: boolean) => void
}


export const ComputerHeader: React.FC<Props> = ({ setBurgerStatus }) => {    
    const { t } = useTranslation();
    const [isSearchShown, setIsSearchShown] = useState(true)
    const setClassNamesWithIsSearchShown = (className: string, smallMobile = false, disableSearchOption = false) => {
        let viewport = smallMobile ? 500 : 899
        let disabledClassName = `${className}__disabled`
        let secondClassName = disableSearchOption ? isSearchShown && window.innerWidth <= viewport ? disabledClassName : '' : isSearchShown ? '' : disabledClassName
        return `${className} ${secondClassName}`
    }
    useEffect(() => {
        window.innerWidth <= 899 && setIsSearchShown(false)
    }, [])

    return <Toolbar>
        <div className={c.computerMainContainer}>
            <div className={c.headerContainer}>
                <Link to='/' className={setClassNamesWithIsSearchShown(c.logoContainer, true, true)}>
                    <img alt={t('alts.logo')} src={logo} />
                </Link>
                <Search isSearchShown={isSearchShown} hideSearch={() => setIsSearchShown(false)} className={setClassNamesWithIsSearchShown(c.search)} />
                <Hidden mdUp>
                    <SearchIcon onClick={() => setIsSearchShown(true)} className={setClassNamesWithIsSearchShown(c.mobileSearch, false, true)} />
                    <BurgerIcon onClick={() => setBurgerStatus(true)} className={c.burger} />
                </Hidden>
                <Button className={setClassNamesWithIsSearchShown(c.phoneContainer, false, true)}><a className={c.phone} href='tel:+380 630 130 103'>+380 630 130 103</a></Button>
                <Hidden mdDown>
                    <LanguageAndBasket />
                </Hidden>
            </div>
            <Hidden mdDown>
                <div className={c.navLinksContainer}>
                    <div className={c.navLinksContnet}>
                        <NavLinks categoriesClassName={c.categoriesContainer} className={c.navContainer} />
                        <GoodWithDiscount className={c.goodWithDiscountContainer} />
                    </div>
                </div>
            </Hidden>
        </div>
    </Toolbar>
};