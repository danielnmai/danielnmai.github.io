import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { createHead } from "@unhead/vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiLinkedin,
  BiGithub,
  AiStackoverflowSquare,
} from "oh-vue-icons/icons";

addIcons(BiLinkedin, BiGithub, AiStackoverflowSquare);

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
