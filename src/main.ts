import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

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

app.config.errorHandler = (err) => {
  console.log("Error ", err);
};

app.mount("#app");
