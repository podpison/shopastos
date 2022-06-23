import { TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import c from "./footer.module.scss";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import { useDispatch } from "react-redux";
import { setNewManagerClient } from "../../../redux/reducers/customerReducer";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";
import { alertReducerActions } from "../../../redux/reducers/alertReducer";

const initialValues = { phone: '' };

export const ContactManagerForm: React.FC = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    
    const validationSchema = Yup.object().shape({
        phone: Yup.string().matches(/[0-9]{7}/, 'form.wrongFormat').required('form.required')
    });

    return <div className={c.contactManagerFormContainer}>
        <h4 className={c.article}>{t('footer.contactManagerForm.article')}</h4>
        <p className={c.sign}>{t('footer.contactManagerForm.sign')}</p>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values, { validateForm, resetForm }) => {
                validateForm()
                dispatch(setNewManagerClient(values));
                resetForm();
            }}
        >
            {({ values, errors, handleChange, handleSubmit }) => {
                return <form className={`${c.form} ${!!errors.phone && c.error}`} onSubmit={handleSubmit}>
                    <TextField className={c.textField} variant="outlined" helperText={errors.phone && t(errors.phone)} error={!!errors.phone} value={values.phone} onChange={handleChange} placeholder={t('userCredentialsForm.fields.phone')} type='tel' name='phone' />
                    <Button className={c.button} color='blue'>
                        <ArrowIcon className={c.arrow} />
                    </Button>
                </form>
            }}
        </Formik>
    </div>
};