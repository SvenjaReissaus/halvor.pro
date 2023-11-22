import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { VContainer } from "vuetify/components";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { useI18n } from "vue-i18n";
import type { ThemeDefinition } from "vuetify";

const palette = {
    primary: "#9E77ED",
    "on-primary": "#ffffff",
    "primary-darken": "#875BF7",
    "on-primary-darken": "#ffffff",
    "primary-lighten": "#D6BBFB",
    "on-primary-lighten": "#000000",

    secondary: "#528BFF",
    "on-secondary": "#ffffff",
    "secondary-darken": "#175CD3",
    "on-secondary-darken": "#ffffff",
    "secondary-lighten": "#B2CCFF",
    "on-secondary-lighten": "#000000"
};

const light: ThemeDefinition = {
    dark: false,
    colors: {
        ...palette,
        background: "#F7F7F9",
        "on-background": "#4C4E64DE",
        surface: "#FFFFFF",
        "on-surface": "#4C4E6438",
        error: "#F04438",
        "on-error": "#FFFFFF",
        warning: "#F79009",
        "on-warning": "#FFFFFF",
        success: "#17B26A",
        "on-success": "#FFFFFF",
        info: "#2970FF",
        "on-info": "#FFFFFF"
    }
};

const dark: ThemeDefinition = {
    dark: true,
    colors: {
        ...palette,
        background: "#121212",
        "on-background": "#F2F2F2",
        surface: "#202124",
        "on-surface": "#F8FAFC",
        "surface-variant": "#303030",
        "on-surface-variant": "#F8FAFC",
        error: "#F97066",
        "on-error": "#000000",
        warning: "#FEC84B",
        "on-warning": "#121212",
        info: "#528BFF",
        "on-info": "#000000"
    }
};

export default defineNuxtPlugin((app) => {
    const i18n = { global: app.$i18n };
    const vuetify = createVuetify({
        blueprint: md3,
        aliases: {
            VPage: VContainer
        },
        ssr: true,
        defaults: {
            VAlert: {
                variant: "tonal",
                rounded: "lg"
            },
            VBtn: {
                color: "secondary",
                exact: true,
                class: ["px-4"]
            },
            VCardTitle: {
                class: ["text-wrap"]
            },
            VCheckbox: {
                color: "secondary",
                density: "compact",
                hideDetails: true
            },
            VFileInput: {
                color: "primary",
                rounded: "lg",
                variant: "outlined",
                prependIcon: "",
                appendInnerIcon: "mdi-paperclip"
            },
            VListSubheader: {
                class: ["text-uppercase", "font-weight-bold"]
            },
            VList: {
                color: "primary"
            },
            VListItem: {
                rounded: "lg",
                exact: true
            },
            VTextarea: {
                variant: "outlined",
                rounded: "lg",
                color: "primary"
            },
            VTextField: {
                variant: "outlined",
                rounded: "lg",
                color: "primary"
            },
            VPage: {
                fluid: true,
                class: ["d-flex", "flex-grow-1", "flex-column"]
            },
            VProgressCircular: {
                indeterminate: true,
                color: "secondary"
            },
            VProgressLinear: {
                indeterminate: true,
                rounded: "rounded",
                color: "secondary"
            },
            VSelect: {
                variant: "outlined",
                rounded: "lg",
                color: "primary"
            }
        },
        icons: {
            defaultSet: "mdi",
            aliases,
            sets: {
                mdi
            }
        },
        theme: {
            themes: { light, dark }
        },
        locale: {
            adapter: createVueI18nAdapter({ i18n, useI18n })
        }
    });

    app.vueApp.use(vuetify);
});
