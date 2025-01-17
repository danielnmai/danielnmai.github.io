<script setup lang="ts">
const props = defineProps<{
  name: string;
  url: string;
  title: string;
  imageName: string;
  imageRightSide?: boolean;
}>();

const getImageURL = () =>
  new URL(`../assets/pictures/${props.imageName}`, import.meta.url).toString();
</script>

<template>
  <div class="flex flex-col my-5">
    <div v-if="!imageRightSide">
      <div class="flex flex-row leading-normal">
        <div class="flex flex-col mt-5">
          <img
            :alt="name"
            class="md:max-w-[200px] object-contain rounded-full mr-5"
            :src="getImageURL()"
          />
          <a class="self-center font-bold mt-5" :href="url" target="_blank">{{
            name
          }}</a>
          <span class="text-center">{{ title }}</span>
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

    <div v-if="imageRightSide">
      <div class="flex flex-row leading-normal">
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
            class="md:max-w-[200px] object-contain rounded-full mr-5"
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
</template>
