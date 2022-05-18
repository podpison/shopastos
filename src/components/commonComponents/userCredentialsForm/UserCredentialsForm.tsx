import * as Yup from "yup";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setNewManagerClient, customerReducerActions } from "../../../redux/customerReducer";
import c from "./userCredentialsForm.module.scss";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";

const initialValues = { name: '', email: '', phone: '' };
export type OrderCustomMerchFormType = typeof initialValues;

type Props = {
    className?: string
    formClassName?: string
    signClassName?: string
    isItBasketItems?: boolean
    changedFormContainer?: boolean
}

export const UserCredentialsForm: React.FC<Props> = ({ className, formClassName, signClassName, isItBasketItems = false, changedFormContainer = false }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(2, 'form.wrongFormat').max(20, 'form.tooLong').required('form.required'),
        email: Yup.string().email('form.wrongFormat').required('form.required'),
        phone: Yup.string().matches(/[0-9]{7}/, 'form.wrongFormat').required('form.required')
    });

    let splitedSign = t('userCredentialsForm.sign').split(' ');
    let otherWord = splitedSign.slice(0, -4).join(' ')
    let greenWord = splitedSign.slice(-4).join(' ');

    return <div className={`${c.formContainer} ${changedFormContainer && c.changedFormContainer} ${className}`}>
        <p className={`${c.sign} ${signClassName}`}>{otherWord} <span>{greenWord}</span></p>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values, { validateForm, resetForm }) => {
                validateForm();
                dispatch(setNewManagerClient(values));
                isItBasketItems && dispatch(customerReducerActions.deleteBasketItems());
                resetForm();
            }}
        >
            {({ values, errors, handleChange, handleSubmit }) => {
                return <form className={`${c.form} ${formClassName}`} onSubmit={handleSubmit}>
                    <TextField className={c.textField} variant="standard" value={values.name} onChange={handleChange} error={errors.name !== undefined} helperText={errors.name && t(errors.name)} placeholder={t('userCredentialsForm.fields.name')} name='name' />
                    <TextField className={c.textField} variant="standard" value={values.email} onChange={handleChange} error={errors.email !== undefined} helperText={errors.email && t(errors.email)} placeholder={t('userCredentialsForm.fields.email')} type='email' name='email' />
                    <TextField className={c.textField} variant="standard" value={values.phone} onChange={handleChange} error={errors.phone !== undefined} helperText={errors.phone && t(errors.phone)} placeholder={t('userCredentialsForm.fields.phone')} type='tel' name='phone' />
                    <Button>{t('userCredentialsForm.button')}</Button>
                </form>
            }}
        </Formik>
    </div>
};