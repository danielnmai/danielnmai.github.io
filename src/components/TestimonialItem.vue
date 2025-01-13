<script setup lang="ts">
import { ref } from "vue";
const isHidden = ref(false);
</script>

<template>
  <div class="flex-row">
    <slot name="content"></slot>
    <slot name="more-content"></slot>
    <div class="justify-self-end">
      <span>Show More</span>
    </div>
  </div>
</template>
