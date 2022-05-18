import c from "./accordion.module.scss";
import { Accordion as MUIAccordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandIcon from "@mui/icons-material/ExpandMore";

type Props = {
    article: string
    className?: string
}

export const Accordion: React.FC<Props> = ({ article, children, className }) => {
    return <MUIAccordion className={`${c.accordionContainer} ${className}`}>
        <AccordionSummary className={c.article} expandIcon={<ExpandIcon className={c.expandIcon} />}>{article}</AccordionSummary>
        <AccordionDetails className={c.sign}>
            {children}
        </AccordionDetails>
    </MUIAccordion>
};