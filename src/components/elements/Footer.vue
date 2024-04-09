<template>
  <footer>
    <div id='contact'>
      <div class='container'>
        <h3>Get in touch</h3>
        <Icon href='mailto:hello@johannesschweig.de' :size='windowWidth > 768 ? "48" : "40"'>
          <MailIcon />
        </Icon>
        <Icon href='https://linkedin.com/in/jschweig' :size='windowWidth > 768 ? "48" : "40"'>
          <LinkedinIcon />
        </Icon>
      </div>
    </div>
    <div id='legal'>
      <router-link to='/legal' id='legal' class='link body1'>
        Legal / Impressum
      </router-link>
    </div>
  </footer>
</template>

<script>
import Icon from './Icon.vue'
import LinkedinIcon from '@/assets/bio/linkedin.svg'
import MailIcon from '@/assets/bio/mail.svg'

export default {
  components: {
    Icon,
    LinkedinIcon,
    MailIcon
  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style scoped>
#contact {
  background-color: var(--dark);
  font-family: var(--font-serif);
  padding-left: var(--content-padding);
  padding-right: var(--content-padding);
  height: 220px;
  display: grid;
  align-items: center;
}

.container {
  text-align: center;
  margin: 0 auto;
}

h3 {
  color: white;
  margin: 0 0 18px 0;
}

a:nth-child(2) {
  margin-right: 40px;
}

#legal {
  text-align: center;
  line-height: 32px;
  color: var(--light);
}


@media screen and (max-width: 768px) {
  #contact {
    height: 170px;
  }

  h3 {
    font-size: var(--size-h4);
  }
}
</style>