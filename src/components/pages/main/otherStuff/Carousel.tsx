import ReactSlickCarousel from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useRef } from "react";
import { CarouselItem } from "./CarouselItem";
import c from "./../mainPage.module.scss";
import { Button } from "@mui/material";
import { useAllGoods } from "../../../../hooks/useAllGoods";

export const Carousel: React.FC = () => {
    let items = useAllGoods();
    let Items = [...items, ...items].map((i, index) => <CarouselItem item={i} key={index} />); // dev only
    // let Items = items.map((i, index) => <CarouselItem item={i} key={index} />);
    const [currentSlide, setCurrentSlide] = useState(1);

    let slidesCount = Items ? Math.ceil(Items.length / 4) : 0;

    const decreaseCurrentSlide = () => {
        carouselRef?.current?.slickPrev();
        setCurrentSlide(currentSlide - 1);
    }
    const increaseCurrentSlide = () => {
        carouselRef?.current?.slickNext();
        setCurrentSlide(currentSlide + 1);
    }

    const carouselRef = useRef<any>(null);
    return <div className={c.sliderContainer}>
        <ReactSlickCarousel swipe={false} arrows={false} ref={carouselRef} className={c.slider} slidesToShow={4} slidesToScroll={4} infinite={false}>
            {Items}
        </ReactSlickCarousel>
        <div className={c.slideCounterContainer}>
            <Button onClick={decreaseCurrentSlide} className={`${c.arrow} ${currentSlide === 1 && c.disabled}`} disabled={currentSlide === 1}><ArrowBackIcon /></Button>
            <p className={c.slideCount}>{currentSlide} / {slidesCount}</p>
            <Button onClick={increaseCurrentSlide} className={`${c.arrow} ${currentSlide === slidesCount && c.disabled}`} disabled={currentSlide === slidesCount}><ArrowForwardIcon /></Button>
        </div>
    </div>
};