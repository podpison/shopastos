import c from "./orderCustomMerch.module.scss";
import lampIMG from "./../../../static/img/commonComponents/lamp.png";
import rocket1IMG from "./../../../static/img/commonComponents/rocket1.png";
import rocket2IMG from "./../../../static/img/commonComponents/rocket2.png";
import { UserCredentialsForm } from "../userCredentialsForm/UserCredentialsForm";
import { useTranslation } from "react-i18next";

export const OrderCustomMerch: React.FC = () => {
    const { t } = useTranslation();

    return <div id='orderCustomMerch' className={c.orderCustomMerch}>
        <div className={c.orderCustomMerchContent}>
            <div className={c.textsAndImagesContainer}>
                <div className={c.texts}>
                    <h3 className={c.article}>{t('orderCustomMerch.article')}</h3>
                    <p className={c.sign}>{t('orderCustomMerch.sign')}</p>
                </div>
                <div className={c.imagesContainer}>
                    <img className={c.rocket1} alt={t('alts.orderCustomMerch.firstRocket')} src={rocket1IMG} />
                    <img className={c.lamp} alt={t('alts.orderCustomMerch.lamp')} src={lampIMG} />
                    <img className={c.rocket2} alt={t('alts.orderCustomMerch.secondRocket')} src={rocket2IMG} />
                </div>
            </div>
            <UserCredentialsForm className={c.formContainer} signClassName={c.formSign} formClassName={c.form} />
        </div>
    </div>
};