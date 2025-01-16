import { createPinia } from "pinia";
import { createApp } from "vue";

import { createHead } from "@unhead/vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  AiStackoverflowSquare,
  BiGithub,
  BiLinkedin,
  FaQuoteLeft,
  FaQuoteRight,
} from "oh-vue-icons/icons";

addIcons(
  BiLinkedin,
  BiGithub,
  AiStackoverflowSquare,
  FaQuoteLeft,
  FaQuoteRight
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(createPinia());
app.use(router);

// add custom meta tags
// https://unhead.unjs.io/setup/vue/installation
app.use(createHead());

app.config.errorHandler = (err) => {
  console.log("Error ", err);
};

app.mount("#app");
