import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Carousel from "react-slick";
import { useStaticItems } from "../../../../hooks/useStaticItems";
import { getWeCooperateWithDataSelector } from "../../../../redux/selectors";
import { Item } from "./Item";
import c from "./weCooperateWith.module.scss";

const responsive = [
    {
        breakpoint: 1500,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
    },
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
    },
    {
        breakpoint: 899,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 440,
        settings: {
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    }
];

export const WeCooperateWith: React.FC = () => {
    useStaticItems("weCooperateWithData");
    const { t } = useTranslation();
    const carouselRef = useRef<any>(null);
    let Items = useSelector(getWeCooperateWithDataSelector)?.map((i, index) => <Item {...i} key={index} />);

    useLayoutEffect(() => {
        setTimeout(() => {
            window.innerWidth <= 1500 && carouselRef?.current?.slickPrev();
        }, 2000)
    }, []);

    return <div className={c.weCooperateWithContainer}>
        <h3 className={c.article}>{t('mainPage.weCooperateWith.article')}</h3>
        <Carousel ref={carouselRef} className={c.carousel} swipe={false} responsive={responsive} slidesToShow={5} slidesToScroll={5} arrows infinite={false} dots={false}>
            {Items}
        </Carousel>
    </div>
};