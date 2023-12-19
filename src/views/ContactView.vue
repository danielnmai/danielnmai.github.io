<template>
  <main class="w-full my-10 pl-10 pr-5">
    <h1 class="text-[2rem] font-bold">Email Me</h1>
    <form ref="form" @submit.prevent="sendEmail" class="flex flex-col">
      <label class="my-2">Name</label>
      <input
        type="text"
        name="user_name"
        class="w-1/2 border border-gray rounded px-2 py-1"
        required
      />
      <label class="my-2">Email</label>
      <input
        type="email"
        name="user_email"
        class="w-1/2 border border-gray rounded px-2 py-1"
        required
      />
      <label class="my-2">Message</label>
      <textarea
        name="message"
        class="border border-gray rounded px-2 py-1 min-h-[100px]"
        required
      ></textarea>
      <button
        type="submit"
        class="border rounded hover:bg-primaryHover border-primary bg-primary my-4 px-8 w-fit self-center"
      >
        Send
      </button>
    </form>
  </main>
</template>

<script lang="ts">
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "gmail",
          "template_1dprzyb",
          // @ts-ignore
          this.$refs.form,
          "user_7CyaqH4cLVSObnWInfa8I"
        )
        .then(
          (result: any) => {
            console.log("SUCCESS!", result.text);
          },
          (error: any) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
