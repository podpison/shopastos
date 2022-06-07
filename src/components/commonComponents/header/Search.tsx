import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Autocomplete, createFilterOptions } from "@mui/material";
import { useState } from "react";
import c from "./header.module.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useStaticItems } from "../../../hooks/useStaticItems";
import { getAllGoodsItemsSelector, getKitItemsSelector } from "./../../../redux/selectors";
import { IAllGoodsItem, IKitItem } from "./../../../redux/staticReducer";
import { Link } from "react-router-dom";
import { wordToPathHelper } from "./../../../helpers/wordToPathHelper";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";

const checkItemType = (item: IAllGoodsItem | IKitItem): item is IAllGoodsItem => {
    return (item as IAllGoodsItem).category !== undefined;
};

type Props = {
    className?: string
};

type ItemType = IAllGoodsItem | IKitItem;

export const Search: React.FC<Props> = ({ className }) => {
    useStaticItems('allGoodsItems');
    useStaticItems('kitItems');

    let allGoodsItems = useSelector(getAllGoodsItemsSelector);
    let kitsItems = useSelector(getKitItemsSelector);

    const [inputValue, setInputValue] = useState('');
    const { t } = useTranslation();

    let currentLanguage = currentLanguageHelper<null>(null);
    const filterOptions = createFilterOptions({
        stringify: (option: ItemType) => option.name[currentLanguage] + option.price
    });

    let items: ItemType[] = [...allGoodsItems, ...kitsItems];

    return <Autocomplete className={`${c.searchContainer} ${className}`} options={items} disablePortal filterOptions={filterOptions}
        getOptionLabel={option => option.name ? currentLanguageHelper(option.name) : ''}
        renderInput={
            (params) =>
                <TextField {...params} autoComplete='off' InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }} className={c.search} placeholder={t('header.computerHeader.search')} />
        }
        renderOption={(props, i) => {
            let path = checkItemType(i)
                ? `/allGoods/${wordToPathHelper(i.category.eng)}/${wordToPathHelper(i.subcategory.eng)}?item=${wordToPathHelper(i.name.eng)}`
                : `/kits?item=${wordToPathHelper(i.name.eng)}`;

            return <li {...props}>
                <Link key={i.name.eng} className={c.searchItem} to={path}>
                    <img className={c.img} alt={t('alts.product')} src={i.img} />
                    <p className={c.name}>{currentLanguageHelper(i.name)}</p>
                    <p className={c.price}>{i.price} ₽</p>
                </Link>
            </li>
        }}
    />
};