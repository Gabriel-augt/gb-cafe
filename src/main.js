import "./assets/style.css";
import "aos/dist/aos.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import { pt_BR } from "./locales/pt_BR";
import { en } from "./locales/en";
import { eu } from "./locales/eu";
import { es } from "./locales/es";

import App from "./App.vue";
import router from "./router";

const languages = {
  pt_BR,
  en,
  eu,
  es,
};

const i18n = createI18n({
  locale: "pt_BR",
  fallbackLocale: "pt_BR",
  messages: languages,
  globalInjection: true,
  legacy: false,
});

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount("#app");
