import { useNavigate, useLocation } from "react-router-dom";

type OperationType = 'open' | 'close';
type ModalNameType = 'basket' | 'item'
type UseModalStatusType<T> = T extends 'close' ? () => void : string;

export function useModalStatus<T extends OperationType>(operation: T, modalName: ModalNameType): UseModalStatusType<T> {    
    let navigate = useNavigate();
    const { pathname, search } = useLocation();

    if (operation === 'close') {
        //@ts-ignore
        return () => navigate({search: search.split('?').slice(1).filter(i => !i.includes(modalName)).join('?')});
    }
    //@ts-ignore
    return `${pathname}?${modalName}=true`;
};