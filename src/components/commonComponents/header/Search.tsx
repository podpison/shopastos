import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Autocomplete } from "@mui/material";
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
}

export const Search: React.FC<Props> = ({ className }) => {
    useStaticItems('allGoodsItems');
    useStaticItems('kitItems');

    let allGoodsItems = useSelector(getAllGoodsItemsSelector);
    let kitsItems = useSelector(getKitItemsSelector);

    const [inputValue, setInputValue] = useState('');
    const { t } = useTranslation();

    let currentLanguage = currentLanguageHelper<null>(null);
    let items: (IAllGoodsItem | IKitItem)[] = [...allGoodsItems, ...kitsItems];

    return <Autocomplete id='search' className={`${c.searchContainer} ${className}`} filterSelectedOptions disablePortal options={items} inputValue={inputValue} onInputChange={(e, newValue) => setInputValue(newValue)}
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
        getOptionLabel={option => {
            console.log(option)
            return option.name ? currentLanguageHelper(option.name) : '';
        }}
        renderOption={(props, i) => {
            console.log(i);
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
        filterOptions={(options, state) => options.filter(i => i.name[currentLanguage].toLowerCase().includes(state.inputValue.toLowerCase()) || i.price.toString().includes(state.inputValue))}
    />
};