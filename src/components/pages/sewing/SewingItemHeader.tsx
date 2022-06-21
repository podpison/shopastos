import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { getWhatWeCanSewSelector } from "../../../redux/selectors";
import c from "./sewing.module.scss";
import { withHeader } from "../../../HOC/withHeader/withHeader";
import { Button } from "../../commonComponents/button/Button";
import { useTranslation } from "react-i18next";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";
import { HashLink } from "react-router-hash-link";

export const SewingItemHeader: React.FC = () => {
    const { pathname } = useLocation();
    const { t } = useTranslation();
    let item = useSelector(getWhatWeCanSewSelector).find(i => pathname.includes(i.name.eng.toLowerCase()));
    let name = {rus: '', eng: ''}, description = {rus: '', eng: ''}, productImg = '', sizes = [] as string[];
    if (item !== undefined) {
        name = item.name; description = item.content.description; productImg = item.content.productImg; sizes = item.content.sizes;
    }
    useBreadcrumbs(name);
    let avaliableSizes = sizes?.map((i, index) => <li className={c.size} key={index}>{i}</li>);

    const WithHeaderProductionItemHeader = withHeader(
        () => {
            return <div className={c.buttonAndSizesContainer}>
                <HashLink smooth to='#orderCustomMerch'><Button color='blue'>{t('sewing.sewingItemHeader.button')}</Button></HashLink>
                <div className={c.sizesContainer}>
                    <p className={c.sign}>{t('sewing.sewingItemHeader.sign')}</p>
                    <ul className={c.sizes}>{avaliableSizes}</ul>
                </div>
            </div>
        },
        true,
        currentLanguageHelper(name),
        currentLanguageHelper(description),
        productImg,
        c.sewingItemHeaderContainer,
        c.textContainer
    );

    return <WithHeaderProductionItemHeader />
};