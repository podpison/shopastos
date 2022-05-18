import { Button as MUIButton } from "@mui/material";
import c from "./button.module.scss";

type Props = {
    className?: string
    bold?: boolean
    color?: 'green' | 'blue'
    onClick?: React.MouseEventHandler
    disabled?: boolean
    staticSize?: boolean
}

export const Button: React.FC<Props> = ({ className, children, bold = false, color = 'green', onClick, disabled = false, staticSize = true}) => {
    return <MUIButton onClick={onClick} disabled={disabled} type='submit' className={`${c.button} ${className} ${bold && c.bold} ${color === 'blue' ? c.blue : c.green} ${staticSize && c.staticSize}`
    }>{children}</MUIButton>
};