<script setup lang="ts">
import Portfolio from "../components/ThePortfolio.vue";
import { usePageHead } from "../composables/usePageHead";

usePageHead({
  title: "Work",
  description:
    "Selected software projects built by Daniel Mai, spanning web applications, APIs and cloud deployments.",
  path: "/portfolio",
});
</script>

<template>
  <main class="my-10 px-5">
    <Portfolio />
  </main>
</template>
