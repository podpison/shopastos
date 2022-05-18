import { Logo } from "./Logo";
import c from "./footer.module.scss";
import { Categories } from "./Categories";
import { Information } from "./Information";
import { ContactManagerForm } from "./ContactManagerForm";
import { Contacts } from "../contacts/Contacts";

export const Footer: React.FC = () => {
    return <footer className={c.footerContainer}>
        <div className={c.footerContent}>
            <Logo />
            <Contacts className={c.contactsContainer} />
            <Categories />
            <Information />
            <ContactManagerForm />
        </div>
    </footer>
};