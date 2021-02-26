<template>
  <footer>
    <div id='contact'>
      <div class='container'>
        <div class='title'>Get in touch</div>
        <Icon
          href='https://linkedin.com/in/jschweig'
          size='48'>
          <LinkedInIcon />
        </Icon>
        <Icon
          href='mailto:hello@johannesschweig.de'
          size='48'>
          <MailIcon />
        </Icon>
      </div>
    </div>
    <div id='legal'>
      <router-link
        to='/legal'
        id='legal'
        class='link'>
        Legal / Impressum
      </router-link>
    </div>
  </footer>
</template>

<script>
import Icon from '../elements/Icon'
import LinkedInIcon from '@/assets/bio/linkedin.svg'
import MailIcon from '@/assets/bio/mail.svg'

export default {
  components: {
    Icon,
    LinkedInIcon,
    MailIcon
  }
}
</script>

<style scoped>
#contact {
  background-color: var(--dark);
  color: white;
  font-size: 48px;
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

.title {
  margin-bottom: 18px;
}

a:nth-child(2) {
  margin-right: 40px;
}

#legal {
  text-align: center;
  line-height: 32px;
  color: var(--light);
}

#legal > a {

}
</style>