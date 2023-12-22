<template>
  <main class="w-full my-10 pl-10 pr-5">
    <h1 class="text-[2rem] font-bold">Email Me</h1>
    <form
      id="contact-form"
      ref="form"
      @submit.prevent="sendEmail"
      class="flex flex-col"
    >
      <label class="my-2">Name</label>
      <input
        type="text"
        name="user_name"
        class="md:w-1/2 border border-gray rounded px-2 py-1"
        required
      />
      <label class="my-2">Email</label>
      <input
        type="email"
        name="user_email"
        class="md:w-1/2 border border-gray rounded px-2 py-1"
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
      <div class="flex flex-col">
        <span id="form-feedback" class="self-center"></span>
      </div>
    </form>
  </main>
</template>

<script lang="ts">
import emailjs from "@emailjs/browser";

const showFormFeedback = (message: string, color: string) => {
  const formResult = document.getElementById("form-feedback");
  if (formResult) {
    formResult.innerHTML = "";
    formResult.style.color = color;
    formResult.innerHTML = message;
  }
};
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
            console.log("SUCCESS...", result.text);
            showFormFeedback("Message is sent successfully!", "green");

            const form = document.getElementById("contact-form");
            if (form instanceof HTMLFormElement) form.reset();
          },
          (error: any) => {
            console.log("FAILED...", error.text);
            showFormFeedback("Error :( Please try again.", "red");
          }
        );
    },
  },
};
</script>
