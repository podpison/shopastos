import { Modal, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { IItemPopUp } from "../../../redux/staticReducer";
import ExpandIcon from "@mui/icons-material/ExpandMore";
import Carousel from "react-slick";
import c from "./cards.module.scss";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { useDispatch } from "react-redux";
import { customerReducerActions } from "../../../redux/customerReducer";
import { RusEngTextType } from "../../../redux/store";
import closeImg from "./../../../static/img/commonComponents/close.png";
import { useModalStatus } from "../../../hooks/useModalStatus";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";
import { useEffect, useState } from "react";
import { useBreadcrumbsCallback } from "./../../../hooks/useBreadcrumbsCallback";

type Props = {
    open: boolean
    price: number
    name: RusEngTextType
    popUpData: IItemPopUp
    categoryAndSubcategory: {
        category: RusEngTextType
        subcategory: RusEngTextType
    } | null
}
export const PopUp: React.FC<Props> = ({ open, price, name, popUpData, categoryAndSubcategory }) => {
    let { characteristics, description, images, sizes } = popUpData;
    const breadcrumbsCallback = useBreadcrumbsCallback();
    useBreadcrumbs(name, open);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const closeModal = useModalStatus('close', 'item');
    const [currentSize, setCurrentSize] = useState('');
    useEffect(() => {
        setCurrentSize(popUpData.sizes[0])
    }, [popUpData.sizes]);
    useEffect(() => {
        if (categoryAndSubcategory) {
            breadcrumbsCallback(categoryAndSubcategory.category);
            breadcrumbsCallback(categoryAndSubcategory.subcategory);
        }
        breadcrumbsCallback(name);
    }, []);

    let CarouselItems = images.map((i, index) => <img className={c.carouselItem} key={index} src={i} alt={t('alts.product')} />);
    let Characteristics = characteristics.map((c, index) => <p key={index}><span>{currentLanguageHelper(c.name)}:</span> <span>{currentLanguageHelper<string[]>(c.characteristic).join(' ,')}</span></p>);

    const customPaging = (i: number) => <img className={c.pagingItem} key={i} src={images[i]} alt={t('alts.product')} />;
    const orderButtonHandler = () => {
        dispatch(customerReducerActions.addNewBasketItem({ name, img: images[0], price, count: 1, size: currentSize }));
        closeModal();
    };
    let Sizes = sizes.map((s, index) => <li onClick={() => setCurrentSize(s)} className={currentSize === s ? `${c.size} ${c.activeSize}` : c.size} key={index}>{s}</li>);

    return <Modal sx={{overflowY: 'scroll'}} disableScrollLock={false} className={c.withPopUpContainer} onClose={closeModal} open={open}>
        <div className={c.withPopUp}>
            <img onClick={closeModal} className={c.closeIcon} alt={t('alts.close')} src={closeImg} />
            <Carousel className={c.carousel} customPaging={customPaging} dots infinite={false} >
                {CarouselItems}
            </Carousel>
            <div className={c.contentContainer}>
                <Breadcrumbs className={c.breadcrumbs} />
                <strong className={c.name}>{currentLanguageHelper(name)}</strong>
                <p className={c.price}>{`${t('cards.price.price')}:`} {price} {t('cards.price.сurrency')}</p>
                <p className={c.description}>{currentLanguageHelper(description)}</p>
                <div className={c.componentAndDescriptionContainer}>
                    <div className={c.sizesContainer}>
                        <p className={c.sign}>{t('cards.availableSizesSign')}</p>
                        <ul className={c.sizes}>{Sizes}</ul>
                    </div>
                    <Accordion defaultExpanded className={c.characteristicsContainer}>
                        <AccordionSummary className={c.sign} expandIcon={<ExpandIcon />}>{t('cards.characteristicsSign')}</AccordionSummary>
                        <AccordionDetails className={c.detailsContainer}>
                            {Characteristics}
                        </AccordionDetails>
                    </Accordion>
                    <Button className={c.button} bold color='blue' onClick={orderButtonHandler}>{t('cards.orderSign')}</Button>
                </div>
            </div>
        </div>
    </Modal>
};