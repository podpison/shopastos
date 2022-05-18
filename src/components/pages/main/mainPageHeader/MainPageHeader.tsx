import girlsImage from "./../../../../static/img/mainPage/girls.png";
import c from "./../mainPage.module.scss";
import { Advantage } from "./Advantage";
import { withHeader } from "../../../../HOC/withHeader/withHeader";
import { useTranslation } from "react-i18next";
import { Hidden } from "@mui/material";
import { GoodWithDiscount } from "../../../commonComponents/goodWithDiscunt/GoodWithDiscount";

export const MainPageHeader: React.FC = () => {
    const { t } = useTranslation();
    const WithHeaderMainPageHeader = withHeader(
        () => {
            return <>
                <div className={c.advatages}>
                    <Advantage sign={t('mainPage.header.advantages.advantage1')} />
                    <Advantage sign={t('mainPage.header.advantages.advantage2')} />
                    <Advantage isAdvantageLast sign={t('mainPage.header.advantages.advantage3')} />
                </div>
                <Hidden mdUp>
                    <GoodWithDiscount className={c.goodWithDisount} />
                </Hidden>
            </>
        },
        false,
        t('mainPage.header.article'),
        t('mainPage.header.sign'),
        girlsImage,
        c.headerComponent,
        c.textContainer,
        true
    );

    return <WithHeaderMainPageHeader />
};