import { withHeader } from "./../../../HOC/withHeader/withHeader";
import { Button } from "./../../commonComponents/button/Button";
import c from "./kits.module.scss";
import image from "./../../../static/img/commonComponents/kitsBackground.png";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

export const KitsHeader: React.FC = () => {
    const { t } = useTranslation();

    const WithHeaderKitsHeader = withHeader(
        () => {
            return <div className={c.buttonsContainer}>
                <HashLink smooth to='/kits#cards'>
                    <Button color="blue">{t('kits.header.buttons.button1')}</Button>
                </HashLink>
                <HashLink smooth to='/kits#createYourOwnKit'>
                    <Button color="blue">{t('kits.header.buttons.button2')}</Button>
                </HashLink>
            </div>
        },
        true,
        t('kits.header.article'),
        t('kits.header.sign'),
        image,
        c.kitsHeader,
        c.textsContainer
    );

    return <WithHeaderKitsHeader />
};