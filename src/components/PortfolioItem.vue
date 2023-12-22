<script setup lang="ts">
defineProps<{
  imgURL?: string;
  href?: string;
}>();
</script>

<template>
  <div class="mb-8">
    <hr class="border-1 border-primary my-5" />
    <a class="font-bold w-max my-5" :href="href" target="_blank" rel="noopener">
      <slot name="heading"></slot>
    </a>
    <slot name="media"></slot>
    <p class="my-5 mb-10 pt-3">
      <slot name="details"></slot>
    </p>
  </div>
</template>
