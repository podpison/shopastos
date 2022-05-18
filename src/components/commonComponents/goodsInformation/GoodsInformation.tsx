import { useTranslation } from "react-i18next";
import c from "./goodsInformation.module.scss";

export const GoodsInformation: React.FC = () => {
    const { t } = useTranslation();

    return <div className={c.informationContainer}>
        <div className={c.textContainer}>
            <h3 className={c.article}>{t('goodsInformation.textContainers.container1.article')}</h3>
            <p className={c.sign}>{t('goodsInformation.textContainers.container1.sign1')}</p>
            <p className={c.extraSign}>{t('goodsInformation.textContainers.container1.sign2')}</p>
        </div>
        <div className={c.textContainer}>
            <h3 className={c.article}>{t('goodsInformation.textContainers.container2.article')}</h3>
            <p className={c.sign}>{t('goodsInformation.textContainers.container2.sign1')}</p>
        </div>
        <div className={c.textContainer}>
            <h3 className={c.article}>{t('goodsInformation.textContainers.container3.article')}</h3>
            <p className={c.sign}>{t('goodsInformation.textContainers.container3.sign1')}</p>
        </div>
    </div>
};