<template>
  <div class="bg-dark-100">
    <div class="responsive">
      <h2 class="text-3xl mt-8 mb-4 text-white">Sounds interesting?</h2>
      <p class="body1 text-light-200">Send me a message.</p>
      <div class="flex mb-6 gap-4">
        <Button type="primary" bg="dark" size='sm' text='Send me an email' href='mailto:hello@johannesschweig.de'>
          <SendIcon />
        </Button>
        <Button type="secondary" bg="dark" size='sm' text="LinkedIn" href='https://linkedin.com/in/jschweig'>
        </Button>
      </div>
      <div class="h-px bg-dark-300"></div>
      <div class="my-6 md:grid md:grid-cols-3">
        <div>
          <h3 class="text-xl mt-6 mb-2 text-white">Contact</h3>
          <p class="body2">Johannes Schweig<br>
            Flemingstr 6, 10557 Berlin<br>
            <br>hello@johannesschweig.de<br>www.johannesschweig.de
          </p>
        </div>
        <div>
          <h3 class="text-xl mt-6 mb-2 text-white">Socials</h3>
          <a v-for="platform in platforms" :href="platform.url" class="body2 block cursor-pointer greylink">
            {{ platform.name }}
          </a>
        </div>
        <div>
          <h3 class="text-xl mt-6 mb-2 text-white">Legal</h3>
          <a class="body2 block cursor-pointer greylink" href="/legal">Imprint/Impressum</a>
        </div>
        <a class="body2 block cursor-pointer greylink mt-6" href="https://github.com/johannesschweig/johannesschweig.github.io">Made by Johannes Schweig with Vue.js</a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import SendIcon from '@/assets/landingpage/send.svg'

export default {
  components: {
    Button,
    SendIcon,
  },
  data() {
    return {
      platforms: [
        { name: "LinkedIn", url: "https://linkedin.com/in/jschweig" },
        { name: "Freelancermap", url: "https://www.freelancermap.de/profil/ux-und-product-consultant" },
        { name: "Malt", url: "https://www.malt.de/profile/johannesschweig" },
        { name: "Junico", url: "https://www.junico.de/freelancer/johannes-118" },
        { name: "Uplink", url: "https://uplink.tech/" },
        { name: "GitHub", url: "https://github.com/johannesschweig" },
        { name: "ux.stackexchange", url: "https://ux.stackexchange.com/users/110814/nash" }
      ]
    }
  }
}
</script>

<style scoped>
.body1,
.body2 {
  color: var(--light-200);
}

.greylink:hover,
.greylink:active {
  color: white;
}
</style>