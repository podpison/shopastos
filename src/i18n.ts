import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

let currentLng = localStorage.getItem('lng') || 'rus';

i18n
.use(initReactI18next)
.use(Backend)
.init({
    lng: currentLng,
    fallbackLng: 'rus',
    debug: true,
    backend: {
        loadPath: '/locales/{{lng}}/translation.json',
    },
});

export default i18n;