import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Autocomplete, createFilterOptions } from "@mui/material";
import c from "./header.module.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useStaticItems } from "../../../hooks/useStaticItems";
import { getAllGoodsItemsSelector, getKitItemsSelector } from "./../../../redux/selectors";
import { IAllGoodsItem, IItem } from "./../../../redux/staticReducer";
import { Link } from "react-router-dom";
import { wordToPathHelper } from "./../../../helpers/wordToPathHelper";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";
import { useRef } from "react";

const checkItemType = (item: IAllGoodsItem | IItem): item is IAllGoodsItem => {
    return (item as IAllGoodsItem).category !== undefined;
};

type Props = {
    className?: string
    hideSearch: () => void
    isSearchShown: boolean
};

type ItemType = IAllGoodsItem | IItem;

export const Search: React.FC<Props> = ({ hideSearch, className, isSearchShown }) => {
    useStaticItems('allGoodsItems');
    useStaticItems('kitItems');
    let allGoodsItems = useSelector(getAllGoodsItemsSelector);
    let kitsItems = useSelector(getKitItemsSelector);
    const { t } = useTranslation();
    const textFieldRef = useRef<HTMLInputElement>(null);

    let currentLanguage = currentLanguageHelper<null>(null);
    const filterOptions = createFilterOptions({
        stringify: (option: ItemType) => option.name[currentLanguage] + option.price
    });

    let items: ItemType[] = [...allGoodsItems, ...kitsItems];

    window.innerWidth <= 899 && textFieldRef.current?.focus()

    return <Autocomplete value={null} className={`${c.searchContainer} ${className}`} options={items} disablePortal filterOptions={filterOptions}
        getOptionLabel={option => option.name ? currentLanguageHelper(option.name) : ''}
        renderInput={
            (params) => <TextField ref={textFieldRef} onBlur={window.innerWidth <= 899 ? hideSearch : undefined} {...params} autoComplete='off' className={c.textField} placeholder={t('header.computerHeader.search')} />
        }
        renderOption={(props, i) => {
            let path = checkItemType(i)
                ? `/allGoods/${wordToPathHelper(i.category.eng)}/${wordToPathHelper(i.subcategory.eng)}?item=${wordToPathHelper(i.name.eng)}`
                : `/kits?item=${wordToPathHelper(i.name.eng)}`;

            return <li onClick={window.innerWidth <= 899 ? hideSearch : undefined} {...props}>
                <Link key={i.name.eng} className={c.searchItem} to={path}>
                    <img className={c.img} alt={t('alts.product')} src={i.img} />
                    <p className={c.name}>{currentLanguageHelper(i.name)}</p>
                    <p className={c.price}>{i.price} ₽</p>
                </Link>
            </li>
        }}
    />
};