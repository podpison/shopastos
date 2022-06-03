import FacebookIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import c from "./contacts.module.scss";

type Props = {
    className?: string
    closeBurger?: () => void
}

export const Contacts: React.FC<Props> = ({ className, closeBurger }) => {
    return <div className={`${c.contactsContainer} ${className}`}>
        <div className={c.phoneAndEmailContainer}>
            <a onClick={closeBurger} className={c.phone} href="tel:+380630130103">+380 630 130 103</a>
            <a onClick={closeBurger} className={c.email} href="mailto:example@gmail.com">example@gmail.com</a>
        </div>
        <div className={c.socialNetworksContainer}>
            <a onClick={closeBurger} target='_blank' rel="noreferrer" href='https://m.facebook.com'><FacebookIcon /></a>
            <a onClick={closeBurger} target='_blank' rel="noreferrer" href='https://www.instagram.com'><InstagramIcon /></a>
            <a onClick={closeBurger} target='_blank' rel="noreferrer" href='http://ww38.www.linkedin.com'><LinkedInIcon /></a>
        </div>
    </div>
};