import { useTranslation } from "react-i18next";
import { Contacts as ImportedContacts } from "../../commonComponents/contacts/Contacts";
import { UserCredentialsForm } from "../../commonComponents/userCredentialsForm/UserCredentialsForm";
import c from "./information.module.scss";

export const Contacts: React.FC = () => {
    const { t } = useTranslation();

    return <div className={c.contactsAndFormContainer}>
        <div id='contacts' className={c.contactsContainer}>
            <p className={c.article}>{t('contacts.article1')}</p>
            <ImportedContacts className={c.contacts} />
        </div>
        <div id='contactUs' className={c.userCredentialsFormContainer}>
            <p className={c.contactUsArticle}>{t('contacts.article2')}</p>
            <UserCredentialsForm className={c.userCredentialsForm} changedFormContainer />
        </div>
    </div>
};