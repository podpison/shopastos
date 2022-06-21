import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";
import { withHeader } from "../../../HOC/withHeader/withHeader";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { getWhatWeCanCreateSelector } from "../../../redux/selectors";
import { Button } from "../../commonComponents/button/Button";
import c from "./production.module.scss";
import { HashLink } from "react-router-hash-link";

export const ProductionItemHeader: React.FC = () => {
    const { pathname } = useLocation();
    const { t } = useTranslation();

    let item = useSelector(getWhatWeCanCreateSelector)?.find(i => pathname.includes(i.name.eng.toLowerCase()));
    let name = {rus: '', eng: ''}, description = {rus: '', eng: ''}, productImg = '';
    if (item !== undefined) {
        name = item.name; description = item.content.description; productImg = item.content.productImg;
    }
    useBreadcrumbs(name);
    
    const WithHeaderProductionItemHeader = withHeader(
        () => <HashLink smooth to='#orderCustomMerch'><Button color='blue'>{t('production.productionItemHeader.button')}</Button></HashLink>,
        true,
        currentLanguageHelper(name),
        currentLanguageHelper(description),
        productImg,
        c.productionItemHeaderContainer,
        c.textContainer,
        true
    );

    return <WithHeaderProductionItemHeader />
};