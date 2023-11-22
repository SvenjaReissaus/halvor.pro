<script setup lang="ts">
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const localePath = useLocalePath();
const theme = useTheme();

const toggleTheme = () => useColorMode().preference =
    theme.global.name.value = theme.global.name.value === "light" ? "dark" : "light";
</script>

<template>
  <v-app-bar color="background">
    <template #prepend>
      <v-slide-x-transition>
        <v-app-bar-title class="ml-2">
          <router-link :to="localePath('/')" class="d-flex flex-row align-center text-decoration-none on-surface">
            <v-img
                src="/favicon.svg"
                :height="32" :width="32" :max-width="32" :alt="t('logo')"
            />
            <span class="mx-4 font-weight-bold">Halvor Pro</span>
          </router-link>
        </v-app-bar-title>
      </v-slide-x-transition>
    </template>
    <template #append>
      <v-app-bar-nav-icon
          :icon="theme.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'" @click="toggleTheme" class="ml-1"
          :title="t('nav.theme')"
      />
    </template>
  </v-app-bar>
  <v-main class="d-flex flex-column">
    <NuxtPage />
    <v-footer :flat="true" color="background" class="d-flex flex-column flex-md-row justify-end flex-grow-0">
        <span class="text-body-2">
          &copy; {{ new Date().getFullYear() }} {{ t("rights") }}
        </span>
    </v-footer>
  </v-main>
</template>

<i18n locale="en">
{
  "logo": "Halvor Pro's Logo",
  "nav": {
    "theme": "Toggle theme"
  },
  "rights": "Halvor Pro. All rights reserved."
}
</i18n>
<i18n locale="es">
{
  "logo": "Logo de Halvor Pro",
  "nav": {
    "theme": "Cambiar tema"
  },
  "rights": "Halvor Pro. Todos los derechos reservados."
}
</i18n>
