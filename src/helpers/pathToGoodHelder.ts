import { IAllGoodsItem, IItem } from "../redux/staticReducer";
import { wordToPathHelper } from "./wordToPathHelper";

type GoodType = IAllGoodsItem | IItem | undefined

const isItAllGoodsGood = (item: GoodType): item is IAllGoodsItem => {
  return (item as IAllGoodsItem).category !== undefined;
};

export const pathToGoodHelper = (good: GoodType) => {
  if (good) {
    let pathToGood = isItAllGoodsGood(good)
    ? `/allGoods/${wordToPathHelper(good.category.eng)}/${wordToPathHelper(good.subcategory.eng)}?item=${wordToPathHelper(good.name.eng)}`
    : `/kits?item=${wordToPathHelper(good.name.eng)}`;
    return pathToGood;
  }
  return '';
};