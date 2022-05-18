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

type Props = {
    setBurgerStatus: (status: boolean) => void
}

export const ComputerHeader: React.FC<Props> = ({ setBurgerStatus }) => {    
    const { t } = useTranslation();

    return <Toolbar>
        <div className={c.computerMainContainer}>
            <div className={c.headerContainer}>
                <Link to='/' className={c.logoContainer}>
                    <img alt={t('alts.logo')} src={logo} />
                </Link>
                <Search className={c.search} />
                <Hidden mdUp>
                    <SearchIcon className={c.mobileSearch} />
                    <BurgerIcon onClick={() => setBurgerStatus(true)} className={c.burger} />
                </Hidden>
                <Button className={c.phoneContainer}><a className={c.phone} href='tel:+380 630 130 103'>+380 630 130 103</a></Button>
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