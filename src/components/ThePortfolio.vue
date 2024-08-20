<script setup lang="ts">
import PortfolioItem from "./PortfolioItem.vue";
</script>

<template>
  <PortfolioItem href="https://spokenai.danielmai.com/">
    <template #heading>Voice-to-Voice AI Chat App (2024-)</template>
    <template #media>
      <img
        alt="spoken_ai_project_screenshot"
        class="md:max-w-[500px] object-contain"
        src="@/assets/pictures/spoken-ai-project.jpg"
      />
    </template>
    <template #details
      >An AI assistant that you can speak to and be spoken back. The project
      leverages OpenAI API and written in React and Node.<a
        href="https://github.com/danielnmai/ai-voice-chat-app"
        class="text-green font-bold"
        target="_blank"
        >Source
      </a>
    </template>
  </PortfolioItem>
  <PortfolioItem href="https://www.payconnect.com/">
    <template #heading>PayConnect Platform V2 (2021-2023)</template>
    <template #media>
      <img
        alt="payconnect_platform_screenshot"
        class="md:max-w-[500px] object-contain"
        src="@/assets/pictures/payconnect-project.jpg"
      />
    </template>
    <template #details
      >A payment platform serving more than 5000 dental practices across the US.
      Written in TypeScript and Node.
    </template>
  </PortfolioItem>

  <PortfolioItem href="https://youtu.be/wJ5SaaBM2xw?si=bMuUQ7KxAwbnAeB3">
    <template #heading
      >RACS - Retail Access Control Standards (2021-2023)</template
    >
    <template #media>
      <img
        alt="racs_screenshot"
        class="md:max-w-[500px] object-contain"
        src="@/assets/pictures/racs-project.png"
      />
    </template>
    <template #details
      ><b>React Native</b> app that runs on Android to help more than 80% JUUL
      retailers comply with government laws of limiting sales to underaged
      people.
    </template>
  </PortfolioItem>

  <PortfolioItem href="https://youtu.be/bS5xCFAT90Q">
    <template #heading>Round Up for Schools Clover App (2019-2022)</template>
    <template #media>
      <iframe
        class="w-full aspect-video"
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
      3,000 schools schools in the US. Written with React Native and Node.
    </template>
  </PortfolioItem>

  <PortfolioItem>
    <template #heading>Genshin Impact Guide (2022-2024)</template>
    <template #media>
      <div class="flex md:flex-row flex-col space-x-4">
        <img
          alt="genshin_impact_project_screenshot"
          class="md:max-h-[600px] object-contain my-2"
          src="@/assets/pictures/genshin-project-1.jpg"
        />
        <img
          alt="genshin_impact_project_screenshot"
          class="md:max-h-[600px] object-contain my-2"
          src="@/assets/pictures/genshin-project-2.jpg"
        />
      </div>
    </template>
    <template #details
      >A mobile app providing character build guidance for Genshin Impact, a
      popular RPG game. Written with React Native.
    </template>
  </PortfolioItem>
</template>
