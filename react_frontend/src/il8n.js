import { useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});


export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;

    i18n.changeLanguage(userLanguage);
  }, [i18n]);

  return null; 
};

export default i18n;
