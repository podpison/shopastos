import sweatersImg from "./../../../../static/img/mainPage/sweater.png";
import { Carousel } from "./Carousel";
import c from "./../mainPage.module.scss";
import { useTranslation } from "react-i18next";

export const OtherStuff: React.FC = () => {
    const { t } = useTranslation()

    return <div className={c.otherStuff}>
        <div className={c.otherStuffContent}>
            <div className={c.stuffImgContainer}>
                <div className={c.circle1} />
                <div className={c.circle2} />
                <img className={c.stuffImg} alt={t('alts.stuff')} src={sweatersImg} />
            </div>
            <div className={c.textsContainerAndSlider}>
                <div className={c.texts}>
                    <h3 className={c.article}>{t('mainPage.otherStuff.article')}</h3>
                    <p className={c.sign}>{t('mainPage.otherStuff.sign')}</p>
                </div>
                <Carousel />
            </div>
        </div>
    </div>
};