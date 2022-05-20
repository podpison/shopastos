import { Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { getBasketItemsSelector } from "../../../../redux/selectors";
import { UserCredentialsForm } from "../../userCredentialsForm/UserCredentialsForm";
import { BasketItem } from "./BasketItem";
import closeImg from "./../../../../static/img/commonComponents/close.png";
import c from "./basketModal.module.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import { useModalStatus } from "../../../../hooks/useModalStatus";
import { Pagination } from "./../../../commonComponents/pagination/Pagination";
import { usePortion } from "./../../../../hooks/usePortion";
import { useTranslation } from "react-i18next";

//I put this modal in the header because this modal must be in a component that is always rendered
export const BasketModal: React.FC = () => {
    const { search } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        setIsOpen(search.includes('basket'));
    }, [search]);
    const closeModal = useModalStatus('close', 'basket');
    let items = useSelector(getBasketItemsSelector);

    let Items = items.map(i => <BasketItem {...i} key={i.name.eng} />);
    let PortionOfItems = usePortion<JSX.Element[]>('basketPortion', Items, 3);
    let totalPrice = items.reduce((prev, curr) => prev + curr.count * curr.price, 0);

    let orderNumber = Math.random().toString(36).slice(2, 8).toUpperCase();

    return <Modal className={c.modalContainer} open={isOpen} onClose={closeModal}>
        <div className={c.modal}>
            <img onClick={closeModal} className={c.close} alt={t('alts.close')} src={closeImg} />
            <div className={c.formContainer}>
                <h3 className={c.article}>{t('header.basketModal.checkout')}</h3>
                <UserCredentialsForm isItBasketItems signClassName={c.formSign} formClassName={c.form} />
            </div>
            <div className={c.basketContainer}>
                <div className={c.basketSignAndMobileOrderNumber}>
                    <h3 className={c.article}>{t('header.basketModal.basket')}</h3>
                    <p className={c.orderNumberMobile}>{t('header.basketModal.orderNumber')} {orderNumber}</p>
                </div>
                <div className={c.itemsContainer}>
                    {PortionOfItems}
                </div>
                <div className={c.paginationAndTotalPriceAndOrderNumber}>
                    <p className={c.orderNumber}>{t('header.basketModal.orderNumber')} {orderNumber}</p>
                    <Pagination name='basket' className={c.pagination} portion={2} hidden={Items.length < 4} itemsLength={Items.length} />
                    <strong className={c.totalPrice}>{`${t('header.basketModal.total')}: ${totalPrice} ₽`}</strong>
                </div>
            </div>
        </div>
    </Modal>
};