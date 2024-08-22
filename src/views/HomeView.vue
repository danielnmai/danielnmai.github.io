<script setup lang="ts">
import Testimonial from "../components/TestimonialItem.vue";
</script>

<template>
  <main class="min-h-fit my-10 px-5">
    <div>
      <h1 class="text-[2rem] font-bold">About Me</h1>
      <p class="mt-5">
        Hi! I am Daniel Mai, a California-based software engineer. I write code
        to make the world a little better. I love building new things, playing
        with new technologies and thriving in a team with great people.
      </p>
      <p class="mt-5">
        I am a JavaScript geek and experienced in full cycle software
        development, including but not limited to React for frontend, NodeJS for
        backend, and AWS for deployment.
      </p>
      <p class="mt-5">
        In my free time, I am an avid PC gamer and enjoy reading books and
        working out. I am also an accomplished triathlete, having completed an
        Ironman. I regularly swim, bike, and run.
      </p>
      <p class="mt-5">
        I have a Bachelor's degree in Computer Science from San Francisco Bay
        University.
      </p>
    </div>
    <div class="mt-4">
      <h1 class="text-[2rem] font-bold">Testimonials</h1>
      <Testimonial>
        <template #content>
          <div class="leading-normal">
            <p class="mt-5">
              Daniel was an invaluable team member at Infuse.us, where he served
              as a Technical Lead and Senior SDE.
            </p>
            <p class="mt-5">
              He was responsible for leading the development and launch of
              several successful products for Infuse clients, working with
              product management and Infuse technical leadership. His
              contributions were instrumental in helping the company achieve its
              goals, and he has an impressive ability to find simple solutions
              to complex technical problems. His responsibilities included
              developing technical architectures, and leading development teams
              to deliver product solutions flawlessly.
            </p>

            <p class="mt-5">
              One of the things I most appreciated about working with Daniel was
              his ability to communicate effectively with his peers and
              customers. He has excellent interpersonal skills and can clearly
              articulate technical concepts to both technical and non-technical
              audiences. He is an excellent listener and is always willing to
              collaborate with others to find the best solution to a problem.
            </p>
            <p class="mt-5">
              Daniel leads by example and is always willing to help his team
              members whenever needed. He has a positive attitude, a strong work
              ethic, and is always looking for ways to improve himself and his
              team. <br />
            </p>
            <p class="mt-5">
              I highly recommend Daniel and would love to work with him again in
              the future!
            </p>
          </div>
        </template>
      </Testimonial>
    </div>
  </main>
</template>
