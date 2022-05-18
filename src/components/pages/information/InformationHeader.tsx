import { withHeader } from "../../../HOC/withHeader/withHeader";
import c from "./information.module.scss";
import { useTranslation } from "react-i18next";
import employeesImg from "./../../../static/img/commonComponents/informationBackground.png";
import { HashLink } from "react-router-hash-link";

export const InformationHeader: React.FC = () => {
    const { t } = useTranslation();

    const Links = ['FAQ', 'contacts', 'contactUs'].map((path, index) => <HashLink className={c.link} key={index} smooth to={`/information#${path}`}>{t('contacts.header.links.link' + (index + 1))}</HashLink>);

    const WithHeaderInformationHeader = withHeader(
        () => {
            return <div className={c.informationHeaderLinks}>
                {Links}
            </div>
        },
        true,
        t('contacts.header.article'),
        t('contacts.header.sign'),
        employeesImg,
        c.informationHeader,
        c.textsContainer,
        true
    );

    return <WithHeaderInformationHeader />
};