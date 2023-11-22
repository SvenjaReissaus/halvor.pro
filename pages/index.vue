<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const theme = useTheme();
const localePath = useLocalePath();
const { mobile } = useDisplay();
const gtag = useGtag();

onMounted(() => {
  if (process.env.NODE_ENV !== 'production') return;

  gtag('event', 'screen_view', {
    app_name: 'Halvor Pro',
    screen_name: 'Index'
  });
});
</script>

<template>
  <v-page class="px-0">
    <v-card class="h-page d-flex flex-column flex-md-row align-center" color="transparent"
            :flat="true">
      <v-card-title class="flex-grow-1" :class="[!mobile && 'w-50']">
        <h1 class="text-h2 font-weight-bold text-wrap py-16 py-md-0">
          {{ t("headings.title") }}<br/>
          <span class="text-primary remark">{{ t("headings.remark") }}</span>, {{ t("headings.subtitle") }}.
        </h1>
        <v-sheet class="animated-cube bg-secondary" rounded="xl" />
        <v-sheet color="transparent" class="d-flex flex-row justify-center justify-md-start my-md-8">
          <v-btn :to="localePath('/contact')" append-icon="mdi-message-fast-outline" rounded="lg" variant="tonal" class="font-weight-bold">
            {{ t('contact') }}
          </v-btn>
        </v-sheet>
      </v-card-title>
      <v-img
          role="figure" class="flex-grow-1 img-globe" :class="[mobile ? 'w-75' : 'w-25']"
          :src="theme.current.value.dark ? '/img/globe_light.svg' : '/img/globe.svg'"
          :aria-label="t('aria.img-globe')" :alt="t('aria.img-globe')"
      />
    </v-card>
    <v-container :fluid="mobile" class="my-12">
      <v-row justify="center">
        <v-col v-for="feature in ['visibility', 'presence', 'audience']" :key="feature" cols="12" md="4">
          <v-card variant="tonal" color="secondary">
            <v-card-title class="text-h5 text-center font-weight-bold">
              {{ t(`features.${feature}.title`) }}
            </v-card-title>
            <v-spacer />
            <v-card-text class="text-body-1 text-center on-surface">
              {{ t(`features.${feature}.description`) }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-page>
</template>

<style scoped>
.h-page {
  min-height: calc(100vh - 96px);
  max-height: calc(100vh - 96px);
}
.remark {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: -webkit-gradient(linear, left top, right top, from(rgb(var(--v-theme-primary))), to(rgb(var(--v-theme-secondary))));
  background-image: -webkit-linear-gradient(left, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
  background-image: -o-linear-gradient(left, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
  background-image: linear-gradient(to right, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
}

@keyframes spin {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg);
  }
}

@-webkit-keyframes spin {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(0deg) rotateZ(360deg);
  }
}

.animated-cube {
  height: 8rem;
  width: 8rem;
  z-index: -10;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(70deg);
  position: absolute;
  margin-top: -12rem;
  margin-left: 2rem;
  opacity: .3;

  @media only screen and (min-width: 960px) {
    margin-top: -8rem;
  }
}

.img-globe {
  opacity: 1;
  -webkit-animation: spin 100s linear infinite both;
  animation: spin 100s linear infinite both;

}
</style>

<i18n locale="en">
{
  "headings": {
    "title": "Grow your business",
    "remark": "Online",
    "subtitle": "the right way",
    "soon": "Coming soon."
  },
  "features": {
    "visibility": {
      "title": "Boost your Visibility",
      "description": "Expand the ways your customers can find you online."
    },
    "presence": {
      "title": "Redefine your Presence",
      "description": "Make your business stand out from the rest."
    },
    "audience": {
      "title": "Know your Audience",
      "description": "Understand your customers and how they interact with your business."
    }
  },
  "aria": {
    "img-globe": "Illustration of a globe"
  },
  "contact": "Contact Us"
}
</i18n>
<i18n locale="es">
{
  "headings": {
    "title": "Haz crecer tu negocio",
    "remark": "Online",
    "subtitle": "de la manera correcta",
    "soon": "Próximamente."
  },
  "features": {
    "visibility": {
      "title": "Aumenta tu Visibilidad",
      "description": "Expande las formas en que tus clientes pueden encontrarte en línea."
    },
    "presence": {
      "title": "Redefine tu Presencia",
      "description": "Haz que tu negocio se destaque del resto."
    },
    "audience": {
      "title": "Conoce a tu Audiencia",
      "description": "Comprende a tus clientes y cómo interactúan con tu negocio."
    }
  },
  "aria": {
    "img-globe": "Ilustración de un globo terráqueo"
  },
  "contact": "Contáctanos"
}
</i18n>
