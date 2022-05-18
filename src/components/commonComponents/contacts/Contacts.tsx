import FacebookIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import c from "./contacts.module.scss";

type Props = {
    className?: string
}

export const Contacts: React.FC<Props> = ({ className }) => {
    return <div className={`${c.contactsContainer} ${className}`}>
        <div className={c.phoneAndEmailContainer}>
            <a className={c.phone} href="tel:+380630130103">+380 630 130 103</a>
            <a className={c.email} href="mailto:example@gmail.com">example@gmail.com</a>
        </div>
        <div className={c.socialNetworksContainer}>
            <a href='https://m.facebook.com'><FacebookIcon /></a>
            <a href='https://www.instagram.com'><InstagramIcon /></a>
            <a href='http://ww38.www.linkedin.com'><LinkedInIcon /></a>
        </div>
    </div>
};