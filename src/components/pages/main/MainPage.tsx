import { Kits } from "./Kits";
import { MostPopularGoods } from "./mostPopularGoods/MostPopularGoods";
import { OtherStuff } from "./otherStuff/OtherStuff";
import { WeCooperateWith } from "./weCooperateWith/WeCooperateWith";
import { OrderCustomMerch } from "./../../commonComponents/orderCustormMerch/OrderCustomMerch";

export const MainPage: React.FC = () => {
    return <div>
        <MostPopularGoods />
        <Kits />
        <OtherStuff />
        <OrderCustomMerch />
        <WeCooperateWith />
    </div>
};