import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import translationEng from "./locales/eng/translationEng.json";
import translationRus from "./locales/rus/translationRus.json";

const resources = {
    rus: {
        translation: translationRus
    },
    eng: {
        translation: translationEng
    }
}

let currentLng = localStorage.getItem('lng') || 'rus';

i18n
.use(initReactI18next)
.use(Backend)
.init({
    lng: currentLng,
    fallbackLng: 'rus',
    debug: true,
    resources
});

export default i18n;