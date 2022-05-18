import c from "./withOrderKit.module.scss";
import kitImage from "./../../static/img/commonComponents/kit.png";
import rainbowSign from "./../../static/img/commonComponents/rainbowSign.png";
import { useTranslation } from "react-i18next";

export const withOrderKit = (Component: React.FC, article: string, sign: string, className?: string) => {
    
    return () => {
        const { t } = useTranslation();

        return <div id='createYourOwnKit' className={`${c.orderKitContainer} ${className}`}>
            <div className={c.orderKitContent}>
                <div className={c.content}>
                    <img className={c.rainbowSign} alt={t('alts.rainbowSign')} src={rainbowSign} />
                    <h2 className={c.mainSign}>{article}</h2>
                    <p className={c.sign}>{sign}</p>
                    <Component />
                </div>
                <div className={c.kitExpampleContainer}>
                    <img className={c.kitExpample} alt={t('alts.kit')} src={kitImage} />
                    <div className={c.square1} />
                    <div className={c.square2} />
                </div>
            </div>
        </div>
    };
};