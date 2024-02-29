import i18n from "i18next";
import { initReactI18next } from "react-i18next";

 import translationEn from "./locale/en.json"
import translationAr from "./locale/ar.json"

const resources = {
    en: {
        translation:translationEn

    
    },
    ar: {
        translation: translationAr
       
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;