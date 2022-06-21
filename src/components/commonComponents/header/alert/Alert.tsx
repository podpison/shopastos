import { Alert as MUIAlert } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { alertReducerActions } from "../../../../redux/reducers/alertReducer";
import { getAlertDataSelector } from "../../../../redux/selectors";
import c from "./alert.module.scss";

export const Alert: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let { alertType } = useSelector(getAlertDataSelector);
  
  const closeAlert = () => alertReducerActions.setIsOpen(false);
  useEffect(() => {
    setTimeout(() => dispatch(closeAlert()), 10000)
  }, [dispatch]);

  return <MUIAlert className={c.alert} onClose={closeAlert} severity={alertType}>{t(`header.alert.${alertType}`)}</MUIAlert>
};