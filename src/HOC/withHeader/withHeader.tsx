import c from "./withHeader.module.scss";
import { Breadcrumbs } from "./../../components/commonComponents/breadcrumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";

export const withHeader = (Component: React.FC | null, breadcrumbs: boolean, article: string, sign: string, img: string, mainClassName: string = '', textContainerClassName: string = '', alternativeContainer: boolean = false) => {
    
    return () => {
        const { t } = useTranslation();
        
        return <div className={`${c.withHeaderContainer} ${alternativeContainer && c.alternativeContainer} ${mainClassName}`}>
            <div className={c.contentContainer}>
                {breadcrumbs && <Breadcrumbs />}
                <div className={`${c.textContainer} ${textContainerClassName}`}>
                    <h1 className={c.article}>{article}</h1>
                    <p className={c.sign}>{sign}</p>
                </div>
                {Component !== null && <Component />}
            </div>
            <img className={c.productImg} alt={t('alts.product')} src={img} />
        </div>
    };
};