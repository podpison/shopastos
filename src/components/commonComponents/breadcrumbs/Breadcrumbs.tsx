import { Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";
import { getBreadcrumbsItemSelector } from "../../../redux/selectors";
import { Link } from "react-router-dom";
import { wordToPathHelper } from "./../../../helpers/wordToPathHelper";
import c from "./breadcrumbs.module.scss";

type Props = {
    className?: string
};

export const Breadcrumbs: React.FC<Props> = ({ className }) => {
    let items = useSelector(getBreadcrumbsItemSelector);
    const { t } = useTranslation();
    let engItems = items.map(i => wordToPathHelper(i.eng));
    let Items = items.map((i, index) => {
        let prevItemEng = items[index - 1]?.eng;
        let path = (prevItemEng === 'All goods' || prevItemEng === 'Kits')
        ? '?item=' + engItems[index]
        : '/' + engItems.slice(0, index + 1).join('/');
        return <Link key={index} to={path}>{currentLanguageHelper(i)}</Link>
    });
    
    return <MUIBreadcrumbs area-label='breadcrumb' className={`${c.breadcrumbsContainer} ${className}`}>
        <Link to='/'>{t('breadcrumbs.mainPageLink')}</Link>
        {Items}
    </MUIBreadcrumbs>
};