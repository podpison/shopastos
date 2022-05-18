import { IAllGoodsItemPopUp } from "../../../redux/staticReducer";
import c from "./cards.module.scss";
import { RusEngTextType } from "../../../redux/store";
import { useState, useEffect } from "react";
import { withPopUp } from "./withPopUp";
import { useTranslation } from "react-i18next";

type Props = {
    open: boolean
    name: RusEngTextType
    price: number
    popUpData: IAllGoodsItemPopUp
};

export const AllGoodsItemPopUp: React.FC<Props> = ({ open, name, price, popUpData }) => {
    const { t } = useTranslation();
    let sizes = popUpData.sizes;
    const [currentSize, setCurrentSize] = useState('');
    useEffect(() => {
        setCurrentSize(popUpData.sizes[0])
    }, [popUpData.sizes]);
    let Sizes = sizes.map((s, index) => <li onClick={() => setCurrentSize(s)} className={currentSize === s ? `${c.size} ${c.activeSize}` : c.size} key={index}>{s}</li>);

    const WithPopUpAllGoodsItemPopUp = withPopUp(
        () => <div className={c.sizesContainer}>
            <p className={c.sign}>{t('cards.availableSizesSign')}</p>
            <ul className={c.sizes}>{Sizes}</ul>
        </div>,
        open, price, name, popUpData, {size: currentSize}
    );

    return <WithPopUpAllGoodsItemPopUp />;
};