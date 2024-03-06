import { locales, defaultLocale } from "./src/constants";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Fin Expert",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
        },
      ],
    },
  },
  devtools: { enabled: true },
  srcDir: "src/",

  css: [
    "assets/fonts/gotham-pro/stylesheet.css",
    "assets/styles/scss/index.scss",
  ],
  modules: ["nuxt-windicss", "@nuxtjs/i18n", "@element-plus/nuxt"],
  i18n: {
    langDir: "locales",
    strategy: "no_prefix",
    locales,
    defaultLocale,
  },
});
