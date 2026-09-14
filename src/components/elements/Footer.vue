<template>
  <div>
    <div id="contact" class="responsive">
      <div class="bg-zinc-900 rounded-3xl px-6 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-white mb-2">Sounds interesting?</h2>
          <p class="text-zinc-400 m-0">Send me a message and let's talk about your project.</p>
        </div>
        <div class="flex gap-4 shrink-0">
          <Button type="primary" bg="white" size='sm' text='Send me an email' href='mailto:hello@johannesschweig.de'>
            <SendIcon />
          </Button>
          <Button type="secondary" bg="dark" size='sm' text="LinkedIn" href='https://linkedin.com/in/jschweig'>
          </Button>
        </div>
      </div>
    </div>

    <div class="text-sm mt-12">
      <div class="responsive">
        <div class="grid gap-10 md:grid-cols-[2fr_1fr_1fr] pb-10">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <span class="flex items-center justify-center w-9 h-9 bg-zinc-900 text-white text-sm font-semibold shrink-0">JS</span>
              <span class="text-zinc-900 font-medium">Johannes Schweig</span>
            </div>
            <p class="text-zinc-500 max-w-xs mb-4">IT Business Analyst &amp; Interim Product Owner helping teams turn ambiguous requirements into shippable products.</p>
            <div class="flex gap-3">
              <a href="https://linkedin.com/in/jschweig" aria-label="LinkedIn" class="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors">
                <LinkedinIcon class="w-4 h-4 fill-zinc-600" />
              </a>
              <a href="https://github.com/johannesschweig" aria-label="GitHub" class="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors">
                <GithubIcon class="w-4 h-4 fill-zinc-600" />
              </a>
              <a href="mailto:hello@johannesschweig.de" aria-label="Email" class="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors">
                <SendIcon class="w-4 h-4 fill-zinc-600" />
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-4">Socials</h3>
            <a v-for="platform in platforms" :key="platform.url" :href="platform.url" class="greylink">{{ platform.name }}</a>
          </div>
          <div>
            <h3 class="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-4">Contact</h3>
            <a href="mailto:hello@johannesschweig.de" class="greylink">hello@johannesschweig.de</a>
            <a href="/legal" class="greylink">Imprint/Impressum</a>
          </div>
        </div>
        <div class="h-px bg-zinc-900/10"></div>
        <div class="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-zinc-500 text-xs">
          <div>© {{ new Date().getFullYear() }} Johannes Schweig. All rights reserved.</div>
          <a href="https://github.com/johannesschweig/johannesschweig.github.io" class="hover:text-zinc-900 transition-colors">Made by Johannes Schweig with Vue.js</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import SendIcon from '@/assets/landingpage/send.svg'
import LinkedinIcon from '@/assets/bio/linkedin.svg'
import GithubIcon from '@/assets/bio/github.svg'

export default {
  components: {
    Button,
    SendIcon,
    LinkedinIcon,
    GithubIcon,
  },
  data() {
    return {
      platforms: [
        { name: "Freelancermap", url: "https://www.freelancermap.de/profil/ux-und-product-consultant" },
        { name: "Malt", url: "https://www.malt.de/profile/johannesschweig" },
        { name: "Junico", url: "https://www.junico.de/freelancer/johannes-118" },
        { name: "Uplink", url: "https://uplink.tech/" },
        { name: "ux.stackexchange", url: "https://ux.stackexchange.com/users/110814/nash" }
      ]
    }
  }
}
</script>