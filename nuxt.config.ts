import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        {
          name: "version", content: "0.0.1"
        },
        {
          name: "msapplication-TileColor", content: "#202124"
        },
        {
          name: "theme-color", content: "#202124"
        }
      ],
      link: [
        {
          rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"
        },
        {
          rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"
        },
        {
          rel: "shortcut icon", href: "/favicon.ico"
        },
        {
          rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"
        },
        {
          rel: "manifest", href: "/site.webmanifest"
        },
        {
          rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#303030"
        }
      ]
    }
  },
  build: {
    transpile: ["vuetify"]
  },
  devtools: { enabled: true },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      );
    },
    "@nuxtjs/eslint-module",
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-gtag",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap"
  ],
  colorMode: {
    storageKey: "theme"
  },
  site: {
    url: "https://halvor.pro"
  },
  gtag: {
    id: "G-VGC4GFQZ64"
  },
  googleFonts: {
    display: "swap",
    download: true,
    stylePath: "css/fonts.css",

    families: {
      Nunito: [100,300,400,500,700,900]
    }
  },
  i18n: {
    baseUrl: "https://halvor.pro",
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: "root"
    },
    defaultLocale: "en",
    locales: [{code: "en", iso: "en"}, {code: "es", iso: "es"}],
    strategy: "prefix_except_default",
    useScoped: "local"
  },
  image: {
    inject: true,
    format: ["webp", "png"]
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
});
