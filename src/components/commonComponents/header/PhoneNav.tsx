import { SwipeableDrawer } from "@mui/material";
import c from "./header.module.scss";
import { NavLinks } from "../navLinks/NavLinks";
import closeImg from "./../../../static/img/commonComponents/close.png";
import { LanguageAndBasket } from "./LanguageAndBasket";
import { Contacts } from "../contacts/Contacts";
import { useTranslation } from "react-i18next";

type Props = {
    burgerStatus: boolean
    setBurgerStatus: (status: boolean) => void
}

export const PhoneNav: React.FC<Props> = ({ burgerStatus, setBurgerStatus }) => {
    const { t } = useTranslation();
    const closeBurger = () => setBurgerStatus(false);
    const openBurger = () => setBurgerStatus(true);

    return <SwipeableDrawer className={c.phoneNavContainer} anchor="top" open={burgerStatus} onClose={closeBurger} onOpen={openBurger}>
        <img src={closeImg} alt={t('alts.close')} onClick={closeBurger} className={c.close} />
        <div className={c.languageAndBasket}>
            <LanguageAndBasket closeBurger={closeBurger} />
        </div>
        <NavLinks mainPageLink closeBurger={closeBurger} className={c.mobileNavLinks} />
        <Contacts closeBurger={closeBurger} className={c.contacts} />
    </SwipeableDrawer>
};