import { useTranslation } from "react-i18next";
import { currentLanguageHelper } from "../../../../helpers/currentLanguageHelper";
import { IWhatWeCanDo } from "../../../../redux/staticReducer";
import { Accordion } from "../../accordion/Accordion";
import c from "./../whatWeCanDo.module.scss";

type Props = IWhatWeCanDo['content'];

export const ItemContent: React.FC<Props> = ({ howToOrderSign, productExampleImg, material, paintingTypes, productCareDescription }) => {
    const { t } = useTranslation();

    let MaterialItems = currentLanguageHelper<string[]>(material.materials)?.map((i, index) => <li key={index}>{i}</li>);
    let PaintingTypesItems = currentLanguageHelper<string[]>(paintingTypes.types).map((i, index) => <li key={index}>{i}</li>);
    let ProductCareDescriptionItems = currentLanguageHelper<string[]>(productCareDescription).map((i, index) => <li className={c.productCareItem} key={index}>{i}</li>);

    return <div className={c.itemContentContainer}>
        <div className={c.contentContainer}>
            <Accordion className={c.accordionContainer} article={t('whatWeCanDo.itemContent.itemContainers.container1.article')}>
                <p>{currentLanguageHelper(material.description)}</p>
                <ul>{MaterialItems}</ul>
            </Accordion>
            <div className={c.howToOrderContainer}>
                <h3 className={c.article}>{t('whatWeCanDo.itemContent.sign')}</h3>
                <p className={c.sign}>{currentLanguageHelper(howToOrderSign)}</p>
            </div>
            <Accordion className={c.accordionContainer} article={t('whatWeCanDo.itemContent.itemContainers.container2.article')}>
                <p>{currentLanguageHelper(paintingTypes.description)}</p>
                <ul>{PaintingTypesItems}</ul>
            </Accordion>
            <Accordion className={c.accordionContainer} article={t('whatWeCanDo.itemContent.itemContainers.container3.article')}>
                <ul>{ProductCareDescriptionItems}</ul>
            </Accordion>
        </div>
        <img className={c.mainInProductImg} alt={t('alts.humanInProduct')} src={productExampleImg} />
    </div>
};