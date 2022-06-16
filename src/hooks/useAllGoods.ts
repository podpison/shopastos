import { useSelector } from "react-redux";
import { getAllGoodsItemsSelector, getKitItemsSelector } from "../redux/selectors";

export const useAllGoods = (priority = true) => {
  let allGoodsItems = useSelector(getAllGoodsItemsSelector);
  let kitItems = useSelector(getKitItemsSelector);
  let Items = priority ? [...allGoodsItems, ...kitItems].filter(i => i.priority) : [...allGoodsItems, ...kitItems].filter(i => i.priority === undefined);
  return Items;
};