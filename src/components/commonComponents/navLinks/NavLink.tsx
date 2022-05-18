import { NavLink as RRDNavLink } from "react-router-dom";
import c from "./navLinks.module.scss";

type Props = {
    to: string
    onClick?: () => void
    className?: string
}

//The main idea of this component is to have the active className by default
export const NavLink: React.FC<Props> = ({to, children, onClick, className}) => {
    return <RRDNavLink to={to} onClick={onClick} className={({isActive}) => isActive ? `${c.active} ${className}` : className}>
        {children}
    </RRDNavLink>
};