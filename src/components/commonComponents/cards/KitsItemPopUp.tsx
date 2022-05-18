import { IKitItemPopUp } from "../../../redux/staticReducer";
import { RusEngTextType } from "../../../redux/store";
import { withPopUp } from "./withPopUp";

type Props = {
    open: boolean
    name: RusEngTextType
    price: number
    popUpData: IKitItemPopUp
}

export const KitsItemPopUp: React.FC<Props> = ({ open, name, price, popUpData }) => {
    const WithPopUpAllGoodsItemPopUp = withPopUp(
        () => <></>,
        open, price, name, popUpData, {}
    );

    return <WithPopUpAllGoodsItemPopUp />;
};