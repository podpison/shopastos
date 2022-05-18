import { Accordion } from "../../commonComponents/accordion/Accordion";
import c from "./information.module.scss";
import FAQImg from "./../../../static/img/commonComponents/FAQ.png";
import { useTranslation } from "react-i18next";

export const FAQ: React.FC = () => {
    const { t } = useTranslation();

    return <div id='FAQ' className={c.FAQ}>
        <div>
            <h2 className={c.article}>{t('contacts.FAQ.article')}</h2>
            <Accordion className={c.accordion} article={t('contacts.FAQ.items.item1.article')}>
                <p>{t('contacts.FAQ.items.item1.sign')}</p>
            </Accordion>
            <Accordion article={t('contacts.FAQ.items.item2.article')}>
                <p>{t('contacts.FAQ.items.item2.sign')}</p>
            </Accordion>
            <Accordion article={t('contacts.FAQ.items.item3.article')}>
                <p>{t('contacts.FAQ.items.item3.article')}</p>
            </Accordion>
        </div>
        <img className={c.img} alt={t('contacts.FAQ.alt')} src={FAQImg} />
    </div>
};