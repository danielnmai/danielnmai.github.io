<script setup lang="ts">
import PortfolioItem from "./PortfolioItem.vue";
</script>

<template>
  <PortfolioItem href="https://www.payconnect.com/">
    <template #heading>PayConnect Platform V2 (2022-)</template>
    <template #media>
      <img
        alt="project1_screenshot"
        class="max-w-[500px]"
        src="@/assets/pictures/project1.jpg"
      />
    </template>
    <template #details
      >A payment platform serving more than 5000 dental practices across the US.
      Written in <b>TypeScript</b>, <b>React</b> and <b>NodeJS</b>.
    </template>
  </PortfolioItem>

  <PortfolioItem href="https://youtu.be/wJ5SaaBM2xw?si=bMuUQ7KxAwbnAeB3">
    <template #heading>RACS - Retail Access Control Standards (2021-)</template>
    <template #media>
      <img
        alt="racs_screenshot"
        class="max-w-[500px]"
        src="@/assets/pictures/racs.png"
      />
    </template>
    <template #details
      >React Native app that runs on Android to help more than 80% JUUL
      retailers comply with government laws of limiting sales to underaged
      people.
    </template>
  </PortfolioItem>

  <PortfolioItem href="https://youtu.be/bS5xCFAT90Q">
    <template #heading>Round Up for Schools Clover App (2019-)</template>
    <template #media>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bS5xCFAT90Q?si=rOWaVvBeK8cczQAD"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </template>
    <template #details
      >Android app running on Clover POS that helps users donate to more than
      3,000 schools schools in the US. Written with <b>React Native</b> and
      <b>NodeJS</b>.
    </template>
  </PortfolioItem>

  <PortfolioItem>
    <template #heading>Genshin Impact Guide (2022-)</template>
    <template #media>
      <img
        alt="project2_screenshot"
        class="max-h-[500px]"
        src="@/assets/pictures/project2.jpg"
      />
    </template>
    <template #details
      >A mobile app providing character build guidance for Genshin Impact, a
      popular RPG game. Written with React Native.
    </template>
  </PortfolioItem>
</template>
