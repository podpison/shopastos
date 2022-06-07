import { Card as MUICard, CardActions, CardContent, CardMedia } from "@mui/material";
import c from "./cards.module.scss";
import basketImg from "./../../../static/img/commonComponents/card/basket.png";
import { Link } from "react-router-dom";
import { wordToPathHelper } from "../../../helpers/wordToPathHelper";
import { useState, useEffect } from "react";
import { IItem } from "../../../redux/staticReducer";
import { PopUp } from "./PopUp";
import { useTranslation } from "react-i18next";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";
import { useLocation } from "react-router-dom";
import { useBreadcrumbsCallback } from "./../../../hooks/useBreadcrumbsCallback";

type Props = {
    pathname: string
} & IItem;

export const Card: React.FC<Props> = ({ img, name, price, popUpData }) => {
    const { t } = useTranslation();
    let { pathname, search } = useLocation();
    const breadcrumbsCallback = useBreadcrumbsCallback();

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
                <Link onClick={() => breadcrumbsCallback(name)} className={c.basket} to={linkPath}><img alt={t('alts.basket')} src={basketImg} /></Link>
            </CardActions>
        </MUICard>
        <PopUp open={isModalOpen} name={name} price={price} popUpData={popUpData} />
    </>
};