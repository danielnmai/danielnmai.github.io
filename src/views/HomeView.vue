<script setup lang="ts">
import { ref } from "vue";
import Testimonial from "../components/TestimonialComponent.vue";
const isHidden = ref(true);
const showMoreText = () => (isHidden.value = false);

const showLessText = () => (isHidden.value = true);
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
    <div class="flex flex-col mt-4">
      <h1 class="text-[2rem] font-bold">Testimonials</h1>
      <Testimonial
        name="David Starck"
        url="https://www.linkedin.com/in/davidstarck/"
        title="CEO - Infuse"
        imageName="david-stack.jpg"
      >
        <template #content>
          <p class="italic">
            One of the things I most appreciated about working with Daniel was
            his ability to communicate effectively with his peers and customers.
            He has excellent interpersonal skills and can clearly articulate
            technical concepts to both technical and non-technical audiences. He
            is an excellent listener and is always willing to collaborate with
            others to find the best solution to a problem.
          </p>
        </template>
      </Testimonial>
      <Testimonial
        name="Boris Lippeveld"
        url="https://www.linkedin.com/in/borislippeveld/"
        title="CTO - EngineIQ"
        imageName="boris.jpg"
        imageRightSide
      >
        <template #content>
          <p class="italic">
            It was an absolute pleasure working alongside Daniel. He's very
            humble and always willing to help others out when needed. He's an
            extremely talented engineer that can work on projects autonomously,
            from thinking through product requirements to architecture and
            implementation. You'll be lucky to have him on your team.
          </p>
        </template>
      </Testimonial>
      <div v-if="!isHidden">
        <Testimonial
          name="Danielle Hassid"
          url="https://www.linkedin.com/in/daniellehassid/"
          title="Senior Software Engineering and Product Manager - Grio"
          imageName="danielle.jpeg"
        >
          <template #content>
            <p class="italic">
              Daniel is a developer who consistently works hard and learns fast.
              He is good at communicating what he needs support on to
              efficiently grow his technical skills. I would regularly find
              Daniel to be the first person to help out his teammates with
              technical blockers. With his motivation to learn, work ethic and
              positive attitude, any company would be lucky to have him.
            </p>
          </template>
        </Testimonial>
        <Testimonial
          name="Brett Hawkins"
          url="https://www.linkedin.com/in/brett-hawkins-263b345b/"
          title="Producer - 2K"
          imageName="brett.jpeg"
          imageRightSide
        >
          <template #content>
            <p class="italic">
              Daniel came on board during an existing project and turned into a
              leader and role model for the team. He consistently put in time
              outside of meet-up hours and completed 3-4 cards during sprints.
              Daniel's strength are hardworking, communication, and team work.
              He was always willing to help out his teammates with their card
              and help debug the project. What Daniel might not know at first, I
              100% believe that he will eventually learn it and turn it into a
              strength. He came to the Difference Engine with energy and I
              always heard him talking and pair programming with the other
              developers. Daniel has a true passion for coding and I would
              recommend him to any team. He will not disappoint!
            </p>
          </template>
        </Testimonial>
        <Testimonial
          name="An Tran"
          url="https://www.linkedin.com/in/an-tran-306141a4/"
          title="Computer Technician - Green Ewaste Recycling Center"
          imageName="antran.jpeg"
        >
          <template #content>
            <p class="italic">
              I had the opportunity to work with Daniel Mai as my supervisor at
              MITXPC. I really enjoyed my time working With Daniel, and came to
              known him as one of the best supervisors. He is honest,
              dependable, and has great leadership and would make any team
              accomplish their goals. Beyond that, he is extremely helpful where
              everyone within the company would ask him for help and guidance.
            </p>
          </template>
        </Testimonial>
      </div>
      <div class="self-center m-5">
        <a
          class="text-green"
          @click="isHidden ? showMoreText() : showLessText()"
          >Read {{ isHidden ? "More" : "Less" }}
        </a>
      </div>
    </div>
  </main>
</template>
