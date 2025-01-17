<script setup lang="ts">
defineProps<{
  moreContent?: boolean;
}>();
import { ref } from "vue";
const isHidden = ref(true);
const showMoreText = () => (isHidden.value = false);

const showLessText = () => (isHidden.value = true);
</script>

<template>
  <div class="flex flex-col">
    <div>
      <slot name="content"></slot>
    </div>
    <div v-show="!isHidden" v-if="moreContent">
      <slot name="more-content"></slot>
    </div>
    <div v-if="moreContent" class="self-center m-5">
      <a class="text-green" @click="isHidden ? showMoreText() : showLessText()"
        >Read {{ isHidden ? "More" : "Less" }}
      </a>
    </div>
  </div>
</template>
