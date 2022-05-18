import productImg from "../../../static/img/sewingPage/sweater.png";
import { withHeader } from "../../../HOC/withHeader/withHeader";
import c from "./allGoods.module.scss";
import { useTranslation } from "react-i18next";

export const AllGoodsHeader: React.FC = () => {
    const { t } = useTranslation();

    const WithHeaderAllGoodsHeader = withHeader(
        null,
        true, 
        t('allGoods.header.article'),
        t('allGoods.header.sign'),
        productImg,
        c.allGoodsHeader,
        c.textContainer
    );

    return <WithHeaderAllGoodsHeader />
};