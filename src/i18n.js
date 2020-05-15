import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import es from "./translations/es.json";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en,
    es,
  },
});

export default i18n;
