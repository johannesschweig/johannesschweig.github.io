<template>
  <div class='responsive'>
    <div class="text">
      <div class="h2">Design with clarity. Develop without guesswork.</div>
      <div class="body1">I help founders and venture teams turn ideas into clear, buildable products. With wireframes and prototypes, I align teams on scope, refine the user journey, and make development-ready designs.</div>
      <div class="buttons">
        <Button type="primary" bg="light" size='lg' text='Send me an email' href='mailto:hello@johannesschweig.de'>
          <SendIcon />
        </Button>
        <Button type="secondary" bg="light" size='lg' text="LinkedIn" href='https://linkedin.com/in/jschweig'>
        </Button>
      </div>
    </div>
    <img :src="buildURL('landingpage/portrait.png')" />
  </div>
</template>

<script>
import SendIcon from '@/assets/landingpage/send.svg'
import { buildURL } from '@/utils'
import Button from '@/components/elements/Button.vue'


export default {
  components: {
    Button,
    SendIcon,
  },
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>

<style scoped>
.responsive {
  display: grid;
  grid-template-columns: 5fr 4fr;
  margin-top: 72px;
  gap: 24px;
  align-items: end;
}

img {
  max-width: 100%;
}

.text {
  margin: auto 0;
  display: grid;
  gap: 24px;
}

.text .body1 {
  color: var(--dark-200);
}

.buttons {
  display: flex;
}

.buttons a:first-child {
  margin-right: 24px;
}

@media screen and (max-width: 768px) {
  img {
    margin-top: 24px;
    /* TODO: what is this */
    margin-bottom: -5px;
    max-width: 80%;
  }

  .responsive {
    display: block;
    margin-top: 32px;
  }

  .h2 {
    font-size: var(--size-h3);
  }
}
</style>