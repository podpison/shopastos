import { Route, Routes } from "react-router-dom";
import c from "./production.module.scss";
import productsImg from "./../../../static/img/productionPage/productsImg.jpg"; 
import { withHeader } from "../../../HOC/withHeader/withHeader";
import { Button } from "../../commonComponents/button/Button";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

export const ProductionHeader: React.FC = () => {
    const { t } = useTranslation();

    const WithHeaderProductionHeader = withHeader(
        () => <HashLink smooth to='/information#contacts'>
            <Button color='blue'>{t('production.header.button')}</Button>
        </HashLink>,
        true,
        t('production.header.article'),
        t('production.header.sign'),
        productsImg,
        c.productionHeaderContainer,
        c.textContainer,
        true
    );

    return <Routes>
        <Route index element={<WithHeaderProductionHeader />} />
    </Routes>
};