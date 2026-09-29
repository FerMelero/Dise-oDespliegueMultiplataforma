import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // lng: "en", // avoid if you use lang detector
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    },
    debug: process.env.NODE_ENV === "development",
  });

  export default i18next;