<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Headline from "./components/TheHeadline.vue";
</script>

<template>
  <header class="leading-normal max-h-screen mt-10">
    <div>
      <Headline title="DANIEL MAI" />
      <hr class="border border-primary my-5" />
      <nav>
        <div class="flex justify-center lg:justify-start">
          <RouterLink class="mt-2 text-xlg" to="/">Home</RouterLink>
        </div>
        <div class="flex justify-center lg:justify-start">
          <RouterLink class="mt-2 text-xlg" to="/portfolio">Work</RouterLink>
        </div>
        <div class="flex justify-center lg:justify-start">
          <a
            class="mt-2 text-xlg"
            href="https://danielnmai.medium.com/"
            target="_blank"
            >Blog</a
          >
        </div>
        <div class="flex justify-center lg:justify-start">
          <a
            class="mt-2 text-xlg"
            href="https://danielmai.com/flappy-bird/"
            target="_blank"
            >Play!</a
          >
        </div>
        <div class="flex justify-center lg:justify-start">
          <RouterLink class="mt-2 text-xlg" to="/contact">Contact</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
