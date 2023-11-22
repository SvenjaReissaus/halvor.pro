<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const gtag = useGtag();

onMounted(() => {
  if (process.env.NODE_ENV !== 'production') return;

  gtag('event', 'screen_view', {
    app_name: 'Halvor Pro',
    screen_name: 'Contact'
  });
});
</script>

<template>
  <v-page>
    <v-card color="transparent" :flat="true" class="my-8">
      <v-card-title class="text-h4 text-center">
        {{ t("header") }}
      </v-card-title>
      <v-card-subtitle class="text-h6 text-center py-2">
        {{ t("subheader") }}
      </v-card-subtitle>
    </v-card>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card :title="t('email')">
          <v-card-text class="text-body-1">
            <p class="mb-2">
              {{ t("email-description") }}
            </p>
            {{ t("email-text") }} <a class="text-decoration-none text-primary" href="mailto:contact@halvor.pro">contact@halvor.pro</a>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn variant="tonal" append-icon="mdi-send-variant-outline" href="mailto:contact@halvor.pro">
              {{ t('email-send') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-page>
</template>

<i18n locale="en">
{
  "header": "Get in touch",
  "subheader": "We'd love to hear from you!",
  "email": "Send us an email",
  "email-text": "You can send us an email at",
  "email-description": "Want to know about our latest projects or want to talk about your next project?",
  "email-send": "Send Email"
}
</i18n>
<i18n locale="es">
{
  "header": "Ponte en contacto",
  "subheader": "¡Nos encantaría saber de ti!",
  "email": "Envíanos un correo electrónico",
  "email-text": "Puedes enviarnos un correo electrónico a",
  "email-description": "¿Quieres saber sobre nuestros últimos proyectos o quieres hablar sobre tu próximo proyecto?",
  "email-send": "Enviar correo"
}
</i18n>
