import { Card as MUICard, CardActions, CardContent, CardMedia } from "@mui/material";
import c from "./cards.module.scss";
import basketImg from "./../../../static/img/commonComponents/card/basket.png";
import { Link } from "react-router-dom";
import { wordToPathHelper } from "../../../helpers/wordToPathHelper";
import { useState, useEffect } from "react";
import { AllGoodsItemPopUp } from "./AllGoodsItemPopUp";
import { IAllGoodsItem, IKitItem, IAllGoodsItemPopUp, IKitItemPopUp } from "../../../redux/staticReducer";
import { KitsItemPopUp } from "./KitsItemPopUp";
import { useTranslation } from "react-i18next";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";
import { useLocation } from "react-router-dom";

type Props = {
    pathname: string
} & (IAllGoodsItem | IKitItem);

const isAllGoodsItemPopUp = (popUpData: IAllGoodsItemPopUp | IKitItemPopUp): popUpData is IAllGoodsItemPopUp => {
    return (popUpData as IAllGoodsItemPopUp).sizes ? true : false;
}

export const Card: React.FC<Props> = ({ img, name, price, popUpData }) => {
    const { t } = useTranslation();
    let { pathname, search } = useLocation();

    let linkPath = `${pathname}?item=${wordToPathHelper(name.eng)}${search}`;
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        setIsModalOpen(search.includes(wordToPathHelper(name.eng)));
    }, [search, name.eng]);

    return <>
        <MUICard className={c.cardContainer}>
            <CardMedia className={c.media} component='img' image={img} height='380' alt={t('alts.product')} />
            <CardContent className={c.content}>
                <p className={c.name}>{currentLanguageHelper(name)}</p>
            </CardContent>
            <CardActions className={c.actions}>
                <p className={c.price}>{`${t('cards.price.price')}:`} {price} ₽</p>
                <Link className={c.basket} to={linkPath}><img alt={t('alts.basket')} src={basketImg} /></Link>
            </CardActions>
        </MUICard>
        {isAllGoodsItemPopUp(popUpData)
        ? <AllGoodsItemPopUp open={isModalOpen} name={name} price={price} popUpData={popUpData} />
        : <KitsItemPopUp open={isModalOpen} name={name} price={price} popUpData={popUpData} />}
    </>
};