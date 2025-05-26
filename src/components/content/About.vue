<template>
  <div>
    <div class='responsive pt-4 pb-12 md:py-12'>
      <img class="w-full rounded-lg" :src="buildURL('bio/portrait.jpg')" />
      <div>
        <h1 class="text-3xl mb-4 font-medium mt-10 md:mt-0">About</h1>
        <div class="text-lg leading-8">I help founders and product teams turn vague ideas into clear, buildable products. Using Figma, I shape early
          concepts into prototypes you can show investors, test with users, and hand over to developers. I focus on
          scope, structure, and fast feedback loops—so everyone knows what to build, and why. Based in Berlin. Happy to
          jump in early and stay hands-on through delivery.</div>
        <h2 class="text-2xl mt-8 mb-3 font-medium">CV</h2>
        <div class="flex flex-wrap gap-3">
          <Button type="primary" bg="light" size='sm' text='English CV'
            href='https://drive.google.com/file/d/19Fq8oCB_v1aAk957t-IXDm7rekfPUyf0/view?usp=drive_link'>
            <CvIcon />
          </Button>
          <Button type="secondary" bg="light" size='sm' text='German CV'
            href='https://drive.google.com/file/d/1Z7ydaFpTvXqlFKXE1KLeM45NHirvEmar/view?usp=drive_link'>
            <CvIcon />
          </Button>
        </div>
        <h2 class="text-2xl mt-8 mb-3 font-medium">Industries</h2>
        <div class="flex flex-wrap gap-2">
          <div
            v-for='industry in ["B2B SaaS", "Automotive", "Energy", "FinTech", "Manufacturing", "Consulting", "Startup", "Retail", "Construction", "Real Estate", "Sustainability", "Grants", "Crypto"]'
            class="px-3 py-1.5 bg-white rounded-lg">
            {{ industry }}
          </div>
        </div>
        <h2 class="text-2xl mt-8 mb-3 font-medium">Skills</h2>
        <div class="flex flex-wrap gap-2">
          <div v-for='skill in ["UX Design", "UI Design", "Conception", "Prototyping"
            , "Mobile Design", "Responsive Design", "Figma", "User Research", "Scrum", "Adobe Creative Suite"
            , "User-Centered Design", "Usability Testing", "Requirements Engineering"]' class="px-3 py-1.5 bg-white rounded-lg">
            {{ skill }}
          </div>
        </div>
        <h2 class="text-2xl mt-8 mb-3 font-medium">Networks</h2>
        <div class='flex flex-wrap gap-3'>
          <Button type="secondary" bg="light" size='sm' text='Freelancermap'
            href='https://www.freelancermap.de/profil/ux-und-product-consultant'>
            <FreelancermapIcon />
          </Button>
          <Button type="secondary" bg="light" size='sm' text='Junico' href='https://www.junico.de/freelancer/johannes-118'>
            <JunicoIcon />
          </Button>
          <Button type="secondary" bg="light" size='sm' text='Malt' href='https://www.malt.de/profile/johannesschweig'>
            <MaltIcon />
          </Button>
          <Button type="secondary" bg="light" size='sm' text='Uplink' href='https://uplink.tech/'>
            <UplinkIcon />
          </Button>
          <Button type="secondary" bg="light" size='sm' text='GitHub' href='https://github.com/johannesschweig'>
            <GhIcon />
          </Button>
          <Button type="secondary" bg="light" size='sm' text='ux.stackexchange'
            href='https://ux.stackexchange.com/users/110814/nash'>
            <UxIcon />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Button from '@/components/elements/Button.vue'
import UxIcon from '@/assets/bio/ux.svg'
import CvIcon from '@/assets/bio/cv.svg'
import GhIcon from '@/assets/bio/github.svg'
import FreelancermapIcon from '@/assets/bio/freelancermap.svg'
import MaltIcon from '@/assets/bio/malt.svg'
import UplinkIcon from '@/assets/bio/uplink.svg'
import JunicoIcon from '@/assets/bio/junico.svg'
import { buildURL } from '@/utils'

export default {
  components: {
    CvIcon,
    GhIcon,
    Button,
    UxIcon,
    UplinkIcon,
    FreelancermapIcon,
    JunicoIcon,
    MaltIcon,
  },
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .responsive {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 24px;
  }
}
</style>
