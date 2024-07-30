import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

export const i18nConfig = {
    lng: 'es', // idioma por defecto
    fallbackLng: 'en', // idioma de respaldo
    interpolation: {
        escapeValue: false,
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
};

export const initI18next = () => {
    i18next
        .use(Backend)
        .use(initReactI18next)
        .init(i18nConfig);
    return i18next;
};