import { useTranslation } from "react-i18next";
import { withOrderKit } from "../../../HOC/withOrderKit/withOrderKit";
import { Button } from "../../commonComponents/button/Button";
import c from "./mainPage.module.scss";
import { HashLink } from "react-router-hash-link";

export const Kits: React.FC = () => {
    const { t } = useTranslation();

    const WithOrderKitKits = withOrderKit(
        () => <div className={c.orderKitButtonsContainer}>
            <HashLink className={c.defauldButton} smooth to='/kits#cards'>
                <Button>{t('mainPage.kits.buttons.button1')}</Button>
            </HashLink>
            <HashLink className={c.reversedButton} smooth to='/kits#createYourOwnKit'>
                <Button>{t('mainPage.kits.buttons.button2')}</Button>
            </HashLink>
        </div>,
        t('mainPage.kits.article'),
        t('mainPage.kits.sign'),
        c.orderKitContainer
    );

    return <WithOrderKitKits />;
};