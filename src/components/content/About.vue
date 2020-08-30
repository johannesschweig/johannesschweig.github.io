<template>
  <div id='about'>
    <div class='responsive'>
      <img src='../../assets/bio/bio-image.jpg' />
      <div id='text'>
        <h1>About me</h1>
        <p>I am a UX Designer with 5 years of experience in building digital products. I am always eager to learn new things and to educate my team on cool new methods I found. I love to code small projects (such as this website) in my free time and also enjoy to drill into data (e.g. google analytics) to gain user insights. Even though I have very broad interests, my passion belongs to tailoring digital products to user needs.</p>
        <h2>Things I believe in</h2>
        <p><b>💎 Rigorous prioritization</b><br>There will always be more to do than you have time for. Prioritization makes sure that you will have the maximum impact for the limited resources you are provided.</p>
        <p><b>⚙️ Incremental changes</b><br>You can learn faster what works and what does not which is crucial in fast moving environments.</p>
        <p><b>💬 Strong feedback cultures</b><br>Everyone makes mistakes and to acknowledge them means to grow in your role and as a person.</p>
        <!--<p>Currently, I am a Product Designer at <a class='link' href='https://www.valsight.com/'>Valsight</a>.<p>-->
        <div class='icons'>
          <!-- CV -->
          <Icon
            size='32'
            text='Resume'
            :href='require("../../assets/bio/CV.pdf")' >
            <CvIcon />
          </Icon>
          <!-- UX stackexchange -->
          <Icon
            size='32'
            text='ux.stackexchange'
            href='https://ux.stackexchange.com/users/110814/nash'>
            <UxIcon />
          </Icon>
          <!-- Github -->
          <Icon
            size='32'
            text='GitHub'
            href='https://github.com/johannesschweig'>
              <GhIcon />
          </Icon>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Icon from '@/components/elements/Icon'
import UxIcon from '@/assets/bio/ux.svg'
import CvIcon from '@/assets/bio/cv.svg'
import GhIcon from '@/assets/bio/github.svg'

export default {
  components: {
    CvIcon,
    GhIcon,
    Icon,
    UxIcon
  }
}
</script>

<style scoped>
#about {
  min-height: calc(100vh - 64px - 252px);
  font-size: 18px;
}

h1 {
  font-size: 24px;
}

h2 {
  font-size: 18px;
  font-family: var(--font-serif);
  margin: 0;
}

.responsive {
  padding-top: 48px;
  padding-bottom: 48px;
}

.responsive > img {
  max-width: 100%;
}

#text {
  padding-bottom: 24px;
}

.icons {
  margin-top: 20px;
}

.icons > a {
  margin-right: 24px;
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

  h1 {
    font-size: 36px;
    margin-top: 0;
  }

  h2 {
    font-size: 24px;
  }

  #about {
    font-size: 20px;
  }
}

@media screen and (min-width: 992px) {
  #about {
    font-size: 24px;
  }
}
</style>