import { useTranslation } from "react-i18next";
import logoImg from "./../../../static/img/commonComponents/logo.png";
import c from "./footer.module.scss";

export const Logo: React.FC = () => {
    const { t } = useTranslation();

    return <div className={c.logoContainer}>
        <img className={c.logo} alt={t('alts.logo')} src={logoImg} />
        <p className={c.sign}>{t('footer.logoSign')}</p>
    </div>
};