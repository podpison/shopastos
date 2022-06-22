import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Autocomplete, createFilterOptions } from "@mui/material";
import c from "./header.module.scss";
import { useTranslation } from "react-i18next";
import { useStaticItems } from "../../../hooks/useStaticItems";
import { IAllGoodsItem, IItem } from "../../../redux/reducers/staticReducer";
import { Link } from "react-router-dom";
import { currentLanguageHelper } from "../../../helpers/currentLanguageHelper";
import { pathToGoodHelper } from "../../../helpers/pathToGoodHelder";
import { useLayoutEffect, useRef } from "react";
import { useAllGoods } from "../../../hooks/useAllGoods";

type Props = {
    className?: string
    hideSearch: () => void
    isSearchShown: boolean
};

type ItemType = IAllGoodsItem | IItem;

export const Search: React.FC<Props> = ({ hideSearch, className, isSearchShown }) => {
    useStaticItems('allGoodsItems');
    useStaticItems('kitItems');
    let items = useAllGoods(null);
    const { t } = useTranslation();
    const textFieldRef = useRef<HTMLInputElement>(null)
    let currentLanguage = currentLanguageHelper<null>(null);
    const filterOptions = createFilterOptions({
        stringify: (option: ItemType) => option.name[currentLanguage] + option.price
    });

    useLayoutEffect(() => {
        isSearchShown && textFieldRef.current?.click()
    }, [isSearchShown])

    return <Autocomplete value={null} className={`${c.searchContainer} ${className}`} options={items} disablePortal filterOptions={filterOptions}
        getOptionLabel={option => option.name ? currentLanguageHelper(option.name) : ''}
        renderInput={
            (params) => <TextField ref={textFieldRef} onBlur={window.innerWidth <= 899 ? hideSearch : undefined} {...params} autoComplete='off' className={c.textField} placeholder={t('header.computerHeader.search')}
                InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                        <>
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                            {params.InputProps.startAdornment}
                        </>
                    )
                }} />
        }
        renderOption={(props, i) => {
            let path = pathToGoodHelper(i)

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