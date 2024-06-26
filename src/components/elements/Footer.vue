<template>
  <div class="wrapper">
  <div class="responsive">
    <h4>Sounds interesting?</h4>
    <p class="body1">Send me a message.</p>
    <div class="buttons">
      <Button type="primary" bg="dark" size='sm' text='Send me an email' href='mailto:hello@johannesschweig.de'>
        <SendIcon />
      </Button>
      <Button type="secondary" bg="dark" size='sm' text="LinkedIn" href='https://linkedin.com/in/jschweig'>
      </Button>
    </div>
    <div class="divider"></div>
    <div class="footer">
      <div>
        <h6>Contact</h6>
        <p class="body2">Johannes Schweig<br>
		      Flemingstr 6, 10557 Berlin<br>
          <br>hello@johannesschweig.de<br>www.johannesschweig.de
        </p>
      </div>
      <div>
        <h6>Socials</h6>
        <a v-for="platform in platforms" :href="platform.url" class="body2 greylink">
          {{ platform.name }}
        </a>
      </div>
      <div>
        <h6>Legal</h6>
        <a class="body2 greylink" href="/legal">Imprint/Impressum</a>
      </div>
      <a class="body2 greylink disclaimer" href="https://github.com/johannesschweig/johannesschweig.github.io">Made by Johannes Schweig with Vue.js</a>
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
        { name: "Uplink", url: "https://uplink.tech/" },
        { name: "Malt", url: "https://www.malt.de/profile/johannesschweig" },
        { name: "Freelance.de", url: "https://freelance.de/" },
        { name: "Freelancermap", url: "https://www.freelancermap.de/profil/ux-und-product-consultant" },
        { name: "GitHub", url: "https://github.com/johannesschweig" },
        { name: "ux.stackexchange", url: "https://ux.stackexchange.com/users/110814/nash" }
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-color: var(--dark-100);
}

p.body2 {
  color: var(--light-200);
  margin-bottom: 24px;
}

h4, h6 {
  color: white;
}

.buttons {
  display: flex;
  margin-bottom: 24px;
}

.buttons * {
  margin-right: 16px;
}

.divider {
  height: 1px;
  background-color: var(--dark-300);
}

.footer {
  margin-top: 24px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.body1,
.body2 {
  color: var(--light-200);
}

.greylink {
  cursor: pointer;
  display: block;
}

.greylink:hover,
.greylink:active {
  color: white;
}

.disclaimer {
  margin-top: 24px;
}

@media screen and (max-width: 768px) {
  .footer {
    display: block;
  }
}
</style>