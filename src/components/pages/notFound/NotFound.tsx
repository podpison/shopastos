import c from "./notFound.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../commonComponents/button/Button";
import { useTranslation } from "react-i18next";

export const NotFound: React.FC = () => {
    const { t } = useTranslation();

    return <div className={c.mainContainer}>
        <h1 className={c.errorCode}>404</h1>
        <p className={c.sign1}>{t('notFound.sign1')}</p>
        <p className={c.sign2}>{t('notFound.sign2')}</p>
        <Button className={c.button}><Link to='/'>{t('notFound.button')}</Link></Button>
    </div>
};