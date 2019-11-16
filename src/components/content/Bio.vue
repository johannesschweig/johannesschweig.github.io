<template>
  <div id='bio'>
    <div class='responsive'>
      <img src='../../assets/bio/bio-image.png' />
      <div id='text'>
        <div id='heading'>About me</div>
        <div class='line'>
          After studing psychology and HCI I started a career in UX. I am very interested in programming and data science, but my passion belongs to tailoring digital products to user needs. For that I like to listen to the right people, ideate in all directions and deliver a product which is easy to use and visually appealing.
        </div>
        <div class='line'>
          Currently, I am working as a Product Designer at <a href='https://www.valsight.com/'>Valsight</a>.
        </div>
        <div>
          <!-- LinkedIn -->
          <a href='https://linkedin.com/in/jschweig'>
            <SocialIcon
              img='linkedin' />
          </a>
          <!-- Github -->
          <a href='https://github.com/johannesschweig'>
            <SocialIcon
              img='github' />
          </a>
          <!-- CV -->
          <a :href='require("../../assets/bio/CV.pdf")'>
            <SocialIcon
              img='cv' />
          </a>
          <!-- Mail -->
          <SocialIcon
            img='mail'
            @click.native='mail_activated = !mail_activated' />
          <img
            v-if='mail_activated'
            id='mail-address'
            src='../../assets/email.png' />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import SocialIcon from '../elements/SocialIcon'

export default {
  components: {
    SocialIcon
  },
  data() {
    return {
      mail_activated: false
    }
  }
}
</script>

<style scoped>
#bio {
  background-image: url('../../assets/pattern.png');
  background-position: -150px top;
  background-repeat: repeat;
  font-size: 18px;
}

.line {
  padding-bottom: 12px;
}

#heading {
  font-size: 36px;
  padding-bottom: 14px;
  padding-top: 24px;
}

.responsive {
  padding-top: 48px;
}

.responsive > img {
  max-width: 100%;
}

#mail-address {
  padding: 14px 0;
}

#text {
  padding-bottom: 24px;
}

@media screen and (max-width: 768px) and (min-width: 550px) {
  .responsive > img {
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}

@media screen and (min-width: 768px) {
  .responsive {
    display: grid;
    grid-template-columns: 4fr 48px 5fr
  }

  .responsive > img {
    grid-column: 1 / 2;
  }

  #text {
    grid-column: 3 / 4;
    padding-bottom: 0;
  }

  #heading {
    font-size: 48px;
    padding-bottom: 24px;
  }

  #bio {
    font-size: 20px;
  }
}

@media screen and (min-width: 992px) {
  #bio {
    font-size: 24px;
  }
}
</style>
