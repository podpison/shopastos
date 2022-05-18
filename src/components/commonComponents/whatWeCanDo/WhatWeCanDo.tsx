import { useSelector } from "react-redux";
import { getWhatWeCanCreateSelector, getWhatWeCanSewSelector } from "../../../redux/selectors";
import { Item } from "./item/Item";
import c from "./whatWeCanDo.module.scss";
import { Outlet, Route, Routes } from 'react-router-dom';
import { ItemContent } from "./item/ItemContent";
import { GoodsInformation } from "../goodsInformation/GoodsInformation";
import { useStaticItems } from "../../../hooks/useStaticItems";
import { useTranslation } from "react-i18next";

type Props = {
    operationType: 'sew' | 'create'
}

export const WhatWeCanDo: React.FC<Props> = ({ operationType }) => {
    useStaticItems(operationType === 'sew' ? 'whatWeCanSew' : 'whatWeCanCreate');
    const { t } = useTranslation();
    let data = useSelector(operationType === 'sew' ? getWhatWeCanSewSelector : getWhatWeCanCreateSelector);
    let Items = data.map((i, index) => <Item key={index} operationType={operationType} name={i.name} img={i.img} />);
    let ItemDetails = data.map((i, index) => <Route key={index} path={i.name.eng.toLowerCase()} element={<ItemContent {...i.content} />} />);

    return <div>
        <Routes>
            <Route index element={
                <>
                    <div className={c.whatWeCanSewContainer}>
                        <div className={c.textContainer}>
                            <h2 className={c.article}>{t('whatWeCanDo.article.part1')} {operationType === 'sew' ? t('whatWeCanDo.article.part2v1') : t('whatWeCanDo.article.part2v2')}</h2>
                            <p className={c.sign}>{t('whatWeCanDo.sign')}</p>
                        </div>
                        <div className={c.itemsContainer}>
                            {Items}
                        </div>
                    </div>
                    <GoodsInformation />
                </>
            } />
            {ItemDetails}
        </Routes>
        <Outlet />
    </div>
};