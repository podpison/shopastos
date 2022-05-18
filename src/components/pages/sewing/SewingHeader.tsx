import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { withHeader } from "../../../HOC/withHeader/withHeader";
import { Button } from "../../commonComponents/button/Button";
import sweaterImg from "./../../../static/img/sewingPage/sweater.png";
import c from "./sewing.module.scss";

export const SewingHeader: React.FC = () => {
    const { t } = useTranslation();

    const WithHeaderSewingHeader = withHeader(
        () => <Button color='blue'>{t('sewing.header.button')}</Button>,
        true,
        t('sewing.header.article'),
        t('sewing.header.sign'),
        sweaterImg,
        c.sewingHeaderContainer,
        c.textsContainer
    );

    return <Routes>
        <Route index element={<WithHeaderSewingHeader />} />
    </Routes>
};