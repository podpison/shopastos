import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { currentLanguageHelper } from "../../../../helpers/currentLanguageHelper";
import { BasketItemType, customerReducerActions } from "../../../../redux/reducers/customerReducer";
import removeGoodImg from "./../../../../static/img/commonComponents/close.png";
import c from "./basketModal.module.scss";

export const BasketItem: React.FC<BasketItemType> = ({ count, img, name, price, size }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const itemCountHandler = (operation: 'increase' | 'decrease') => {
        dispatch(customerReducerActions.changeBasketItemCount(name, operation));
    };
    const removeGood = () => {
        dispatch(customerReducerActions.deleteBasketItem(name));
    };
    return <div className={c.itemContainer}>
        <div className={c.imgContainer}>
            <img className={c.img} alt={t('alts.basketItem')} src={img} />
        </div>
        <p className={c.name}>{currentLanguageHelper(name)}</p>
        <div className={c.sizeContainer}>
            <p className={c.sign}>{t('header.basketModal.item.size')}</p>
            <p className={c.size}>{size}</p>
        </div>
        <div className={c.counterContainer}>
            <p className={c.sign}>{t('header.basketModal.item.amount')}</p>
            <div className={c.counter}>
            <Button disabled={count === 1} className={c.button} onClick={() => itemCountHandler('decrease')}>-</Button>
            <p className={c.count}>{count}</p>
            <Button className={c.button} onClick={() => itemCountHandler('increase')}>+</Button>
            </div>
        </div>
        <p className={c.price}>{price} ₽</p>
        <img onClick={removeGood} className={c.removeGood} alt={t('alts.removeGood')} src={removeGoodImg} />
    </div>
};