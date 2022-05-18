import { useTranslation } from "react-i18next";
import { withOrderKit } from "../../../HOC/withOrderKit/withOrderKit";
import { UserCredentialsForm } from "../../commonComponents/userCredentialsForm/UserCredentialsForm";
import c from "./kits.module.scss";

export const OrderKit: React.FC = () => {
    const { t } = useTranslation();

    const WithOrderKitOrderKit = withOrderKit(
        () => <UserCredentialsForm className={c.userCredentialsForm} changedFormContainer />,
        t('kits.orderKit.article'),
        t('kits.orderKit.sign'),
        c.orderKitContainer
    );

    return <WithOrderKitOrderKit />
};