import { useTranslation } from "react-i18next";
import { Contacts } from "./Contacts";
import { FAQ } from "./FAQ";
import c from "./information.module.scss";

export const Information: React.FC = () => {
    const { t } = useTranslation();

    return <div className={c.informationContainer}>
        <div className={c.descriptionItemContainer}>
            <h3 className={c.article}>{t('contacts.information.descriptionItems.item1.article')}</h3>
            <p className={c.sign}>{t('contacts.information.descriptionItems.item1.sign')}</p>
        </div>
        <div className={c.descriptionItemContainer}>
            <h3 className={c.article}>{t('contacts.information.descriptionItems.item2.article')}</h3>
            <p className={c.sign}>{t('contacts.information.descriptionItems.item2.sign')}</p>
        </div>
        <FAQ />
        <Contacts />
    </div>
};