import { Modal, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { IAllGoodsItemPopUp, IKitItemPopUp } from "../../../redux/staticReducer";
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

type NewPropertiesToBasketItemType = {
    size?: string
}

export const withPopUp = (Component: React.FC, open: boolean, price: number, name: RusEngTextType, popUpData: IAllGoodsItemPopUp | IKitItemPopUp, newPropertiesToBasketItem: NewPropertiesToBasketItemType) => {
    return () => {
        useBreadcrumbs(name, open);
        const { t } = useTranslation();
        const dispatch = useDispatch();
        const closeModal = useModalStatus('close', 'item');
        let { characteristics, description, images } = popUpData;

        let CarouselItems = images.map((i, index) => <img className={c.carouselItem} key={index} src={i} alt={t('alts.product')} />);
        let Characteristics = characteristics.map((c, index) => <p key={index}><span>{currentLanguageHelper(c.name)}:</span> <span>{currentLanguageHelper<string[]>(c.characteristic).join(' ,')}</span></p>);

        const customPaging = (i: number) => <img className={c.pagingItem} key={i} src={images[i]} alt={t('alts.product')} />;
        const orderButtonHandler = () => {
            dispatch(customerReducerActions.addNewBasketItem({ name, img: images[0], price, count: 1, ...newPropertiesToBasketItem}));
            closeModal();
        };

        return <Modal className={c.withPopUpContainer} onClose={closeModal} open={open}>
            <div className={c.withPopUp}>
                <img onClick={closeModal} className={c.closeIcon} alt={t('alts.close')} src={closeImg} />
                <Carousel className={c.carousel} customPaging={customPaging} dots infinite={false} >
                    {CarouselItems}
                </Carousel>
                <div className={c.contentContainer}>
                    <Breadcrumbs />
                    <strong className={c.name}>{currentLanguageHelper(name)}</strong>
                    <p className={c.price}>{`${t('cards.price.price')}:`} {price} {t('cards.price.сurrency')}</p>
                    <p className={c.description}>{currentLanguageHelper(description)}</p>
                    <div className={c.componentAndButtonAndDescriptionContainer}>
                        <div className={c.componentAndButtonContainer}>
                            {<Component />}
                            <Button bold color='blue' onClick={orderButtonHandler}>{t('cards.orderSign')}</Button>
                        </div>
                        <Accordion defaultExpanded className={c.characteristicsContainer}>
                            <AccordionSummary className={c.sign} expandIcon={<ExpandIcon />}>{t('cards.characteristicsSign')}</AccordionSummary>
                            <AccordionDetails className={c.detailsContainer}>
                                {Characteristics}
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </Modal>
    };
};