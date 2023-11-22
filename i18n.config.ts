import { en, es } from "vuetify/locale";
import useLang from "~/stores/lang";

export default {
    legacy: false,
    locale: useLang(),
    messages: { en: { $vuetify: en }, es: { $vuetify: es } },
    fallbackLocale: "en"
};
