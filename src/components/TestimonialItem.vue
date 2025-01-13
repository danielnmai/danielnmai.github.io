<script setup lang="ts">
import { ref } from "vue";
const isHidden = ref(true);
const showMoreText = () => (isHidden.value = false);

const showLessText = () => (isHidden.value = true);
</script>

<template>
  <div class="flex flex-col">
    <slot name="content"></slot>
    <div v-show="!isHidden">
      <slot name="more-content"></slot>
    </div>
    <div class="self-center m-5">
      <a @click="isHidden ? showMoreText() : showLessText()"
        >Show {{ isHidden ? "More" : "Less" }}
      </a>
    </div>
  </div>
</template>
