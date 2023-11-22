<script setup lang="ts">
import "~/assets/global.scss";
import { useTheme } from "vuetify";
import { useLocaleHead } from "vue-i18n-routing";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { preference } = useColorMode({ emitAuto: false, storageKey: "theme" });
const theme = useTheme();

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true
});

useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs!.lang
  },
  link: [...(head.value.link || [])],
  meta: [...(head.value.meta || [])]
});

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Halvor Pro` : "Halvor Pro";
  },
  ogTitle: "Halvor Pro",
  description: t("html.description"),
  ogDescription: t("html.description"),
  ogImage: "https://halvor.pro/android-chrome-512x512.png",
  twitterImage: "https://halvor.pro/android-chrome-512x512.png",
  twitterTitle: "Halvor Pro",
  twitterDescription: t("html.description"),
  twitterCard: "summary_large_image"
});

onMounted(() => theme.global.name.value = preference === "dark" ? "dark" : "light");
</script>

<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<i18n locale="en">
{
  "html": {
    "description": "Start growing your business online today with Halvor Pro. We focus on bringing your online presence to the next level specifically designed for your business by a team that values your success."
  }
}
</i18n>
<i18n locale="es">
{
  "html": {
    "description": "Comience a hacer crecer su negocio en línea hoy con Halvor Pro. Nos enfocamos en llevar su presencia en línea al siguiente nivel, específicamente diseñada para su negocio por un equipo que valora su éxito."
  }
}
</i18n>
