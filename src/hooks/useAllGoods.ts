import { useSelector } from "react-redux";
import { getAllGoodsItemsSelector, getKitItemsSelector } from "../redux/selectors";

export const useAllGoods = (priority: boolean | null = true) => {
  let allGoodsItems = useSelector(getAllGoodsItemsSelector);
  let kitItems = useSelector(getKitItemsSelector);
  let items = [...allGoodsItems, ...kitItems];

  if (priority === null) return items
  let filtredItems = priority ? [...allGoodsItems, ...kitItems].filter(i => i.priority !== undefined) : [...allGoodsItems, ...kitItems].filter(i => i.priority === undefined);
  return filtredItems;
};