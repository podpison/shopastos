import { AppBar } from "@mui/material";
import { useState } from "react";
import { ComputerHeader } from "./ComputerHeader";
import { PhoneNav } from "./PhoneNav";
import c from "./header.module.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { MainPageHeader } from "../../pages/main/mainPageHeader/MainPageHeader";
import { SewingHeader } from "../../pages/sewing/SewingHeader";
import { SewingItemHeader } from "../../pages/sewing/SewingItemHeader";
import { AllGoodsHeader } from "../../pages/allGoods/AllGoodsHeader";
import { BasketModal } from "./basketModal/BasketModal";
import { withBreadcrumbs } from "../../../HOC/withBreadcrumbs";
import { ProductionHeader } from "../../pages/production/ProductionHeader";
import { ProductionItemHeader } from "../../pages/production/ProductionItemHeader";
import { KitsHeader } from "../../pages/kits/KitsHeader";
import { InformationHeader } from "../../pages/information/InformationHeader";
import { Alert } from "./alert/Alert";
import { useSelector } from "react-redux";
import { getAlertDataSelector } from "../../../redux/selectors";

const WithBreadcrumbsSewingHeader = withBreadcrumbs(SewingHeader, { rus: 'Пошив', eng: 'Sewing' });
const WithBreadcrumbsAllGoodsHeader = withBreadcrumbs(AllGoodsHeader, { rus: 'Все товары', eng: 'All goods' });
const WithBreadcrumbsProductionHeader = withBreadcrumbs(ProductionHeader, { rus: 'Производство', eng: 'Production' });
const WithBreadcrumbsKitsHeader = withBreadcrumbs(KitsHeader, { rus: 'Наборы', eng: 'Kits' });
const WithBreadcrumbsInformationHeader = withBreadcrumbs(InformationHeader, { rus: 'Информация', eng: 'Information' });

export const Header: React.FC = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const { pathname } = useLocation();
    let alertData = useSelector(getAlertDataSelector);

    return <>
        <header className={c.header}>
            <div className={`${c.headerContent} ${pathname === '/' && c.mainPageHeaderContent}`}> {/* crutch */}
                <AppBar position='relative' className={c.appBar}>
                    <ComputerHeader setBurgerStatus={setBurgerStatus} />
                    <PhoneNav burgerStatus={burgerStatus} setBurgerStatus={setBurgerStatus} />
                </AppBar>
                <Routes>
                    <Route path='/' element={<MainPageHeader />} />
                    <Route path='/kits' element={<WithBreadcrumbsKitsHeader />} />
                    <Route path='/allGoods/*' element={<WithBreadcrumbsAllGoodsHeader />} />
                    <Route path='/sewing/*' element={<WithBreadcrumbsSewingHeader />}>
                        <Route path=':name' element={<SewingItemHeader />} />
                    </Route>
                    <Route path='/production/*' element={<WithBreadcrumbsProductionHeader />} >
                        <Route path=':name' element={<ProductionItemHeader />} />
                    </Route>
                    <Route path='/information' element={<WithBreadcrumbsInformationHeader />} />
                </Routes>
            </div>
        </header>
        <BasketModal />
        {alertData.isOpen && <Alert />}
    </>
};