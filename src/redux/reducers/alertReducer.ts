import { ActionsType } from "../store";

type AlertTypeType = 'success' | 'error'

const initialState = {
  alertType: 'success' as AlertTypeType,
  isOpen: false,
};

type Actions = ActionsType<typeof alertReducerActions>;

export const alertReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'ALERT-REDUCER/SET-TYPE':
      return { ...state, alertType: action.alertType, isOpen: true };
    case 'ALERT-REDUCER/SET-IS-OPEN':
      return { ...state, isOpen: action.isOpen }
    default:
      return { ...state };
  };
};

export const alertReducerActions = {
  setAlertType: (alertType: AlertTypeType) => ({type: 'ALERT-REDUCER/SET-TYPE', alertType} as const),
  setIsOpen: (isOpen: boolean) => ({type: 'ALERT-REDUCER/SET-IS-OPEN', isOpen} as const),
};