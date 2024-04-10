<template>
  <div class='responsive'>
    <img :src="buildURL('landingpage/portrait.png')" />
    <div class="text">
      <h4>From Vision to Interface</h4>
      <p>As a <span>UX Designer</span> or <span>Product Manager</span> I help companies translate business needs into working
        software. With a
        focused and detail-oriented approach I make sure deadlines are met and outcomes as expected.</p>
      <p>Contact me for Interim UX/Product roles or coaching.</p>
      <div class="buttons">
        <Icon size='32' text='Send me an email' href='mailto:hello@johannesschweig.de'>
          <MailIcon />
        </Icon>
        <Icon size='32' text="Linkedin" href='https://linkedin.com/in/jschweig'>
          <LinkedinIcon />
        </Icon>
      </div>
    </div>
  </div>
</template>

<script>
import MailIcon from '@/assets/bio/mail.svg'
import LinkedinIcon from '@/assets/bio/linkedin.svg'
import { buildURL } from '@/utils'
import Icon from '@/components/elements/Icon.vue'


export default {
  components: {
    Icon,
    LinkedinIcon,
    MailIcon,
  },
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>

<style scoped>
.text p span {
  font-size: 20px;
  margin-left: 4px;
  margin-right: 4px;
}

h4 {
  margin: 0;
}

.responsive {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 48px;
  margin-bottom: 72px;
  gap: 24px;
}

.text {
  grid-column: 2/4;
}

img {
  max-width: 100%;
  border-radius: var(--radius);
  opacity: .9;
}

.buttons a:first-child {
  margin-right: 16px;
}

@media screen and (max-width: 768px) {
  img {
    max-width: 70%;
    margin: 0 15% 24px 15%;
  }

  .responsive {
    display: block;
    margin-top: 32px;
    margin-bottom: 64px;
  }
}

</style>