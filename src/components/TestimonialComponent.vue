<script setup lang="ts">
const props = defineProps<{
  name: string;
  url: string;
  title: string;
  imageName: string;
  imageRightSide?: boolean;
}>();

import { onUnmounted, ref } from "vue";

const useInnerWidth = () => {
  const width = ref(window.innerWidth);
  const syncWidth = () => (width.value = window.innerWidth);
  window.addEventListener("resize", syncWidth);
  onUnmounted(() => window.removeEventListener("resize", syncWidth));

  return width;
};

const width = useInnerWidth();
console.log("width", width);

const getImageURL = () =>
  new URL(`../assets/pictures/${props.imageName}`, import.meta.url).toString();
</script>

<template>
  <div class="my-5">
    <div v-if="!imageRightSide">
      <div class="flex flex-col md:flex-row leading-normal">
        <div class="flex flex-col mt-5">
          <img
            :alt="name"
            class="md:max-w-[200px] max-w-[300px] object-contain rounded-full mr-5 self-center md:self-start"
            :src="getImageURL()"
          />
          <a
            class="self-center md:self-start font-bold mt-5"
            :href="url"
            target="_blank"
            >{{ name }}</a
          >
          <span class="text-center md:text-left">{{ title }}</span>
        </div>
        <div class="pl-5 mt-5 bg-lightGray p-5 rounded-3xl">
          <v-icon
            class="my-2"
            name="fa-quote-left"
            scale="2.0"
            fill="#166534"
          />
          <slot name="content"></slot>
        </div>
      </div>
    </div>

    <div v-else>
      <div v-if="width < 768">
        <div class="flex flex-col md:flex-row leading-normal">
          <div class="flex flex-col mt-5">
            <img
              :alt="name"
              class="md:max-w-[200px] max-w-[300px] object-contain rounded-full mr-5 self-center md:self-start"
              :src="getImageURL()"
            />
            <a
              class="self-center md:self-start font-bold mt-5"
              :href="url"
              target="_blank"
              >{{ name }}</a
            >
            <span class="text-center md:text-left">{{ title }}</span>
          </div>
          <div class="pl-5 mt-5 bg-lightGray p-5 rounded-3xl">
            <v-icon
              class="my-2"
              name="fa-quote-left"
              scale="2.0"
              fill="#166534"
            />
            <slot name="content"></slot>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="flex flex-col md:flex-row sm:flex-col leading-normal">
          <div class="pl-5 mt-5 bg-lightGray p-5 rounded-3xl">
            <v-icon
              class="my-2"
              name="fa-quote-left"
              scale="2.0"
              fill="#166534"
            />
            <slot name="content"></slot>
          </div>
          <div class="flex flex-col mt-5 ml-5">
            <img
              :alt="name"
              class="md:max-w-[200px] max-w-[300px] object-contain rounded-full mr-5 self-center md:self-start"
              :src="getImageURL()"
            />
            <a class="self-center font-bold mt-5" :href="url" target="_blank">{{
              name
            }}</a>
            <span class="text-center">{{ title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
