import { useLocalStorage, usePreferredLanguages } from "@vueuse/core";

/*
* Gets the stored language or the preferred language of the browser when it is supported. Fallbacks to English.
* */
const useLang = () => {
    const preferredLang = usePreferredLanguages().value[0];
    const lang = useLocalStorage("lang", "auto");
    return lang.value === "auto" ? preferredLang === "en" || preferredLang === "es" ? preferredLang : "en" : lang.value;
};

export default useLang;
