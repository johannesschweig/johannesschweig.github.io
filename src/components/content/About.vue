<template>
  <div>
    <div class='responsive pt-12 pb-16 md:pt-20'>
      <div>
        <div class="rounded-3xl overflow-hidden aspect-4/5">
          <img class="w-full h-full object-cover" :src="buildURL('bio/portrait.jpg')" />
        </div>
        <div class='pt-3 text-xs text-zinc-500'><a class="hover:text-zinc-900 transition-colors" href="https://dirkmurschall.de/">Image by Dirk Murschall</a></div>
      </div>
      <div>
        <div class="flex items-center gap-3 mb-4 mt-10 md:mt-0">
          <span class="w-6 h-px bg-blue-500"></span>
          <span class="text-xs md:text-sm font-medium tracking-widest text-blue-500 uppercase">About me</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">About</h1>
        <div class="text-lg leading-8 space-y-4">
          <p class="m-0 text-xl font-semibold text-zinc-900">I help product teams turn complex requirements into clear, buildable products.</p>
          <p class="m-0 text-zinc-500">As an IT Business Analyst and Product Owner, I work between business, engineering, and stakeholders — structuring requirements, defining scope, modeling processes, and turning ambiguous problems into functional concepts that teams can actually build.</p>
          <p class="m-0 text-zinc-500">My background in UX research and product design helps me approach products from the user and workflow perspective. I use this when it matters: to understand complex processes, challenge assumptions, and make functional decisions tangible through flows, wireframes, and prototypes.</p>
          <p class="m-0 text-zinc-500">I work best on complex B2B products where there are real constraints — legacy systems, hardware, regulated processes, data-heavy workflows, and many stakeholders.</p>
          <p class="m-0 text-zinc-500">Based in Berlin. Available for freelance Business Analysis, Requirements Engineering, and Product Ownership.</p>
        </div>
        <h2 class="text-xl font-semibold text-zinc-900 mt-10 mb-4">CV</h2>
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
        <h2 class="text-xl font-semibold text-zinc-900 mt-10 mb-4">Industries</h2>
        <div class="flex flex-wrap gap-2">
          <Tag
            v-for='industry in ["B2B SaaS", "Automotive", "Manufacturing", "Real Estate", "Energy", "FinTech", "Telecommunications", "Logistics", "Security Systems", "Data & Analytics"]'
            :key='industry' :text='industry' type="secondary" bg="light" />
        </div>
        <h2 class="text-xl font-semibold text-zinc-900 mt-10 mb-4">Skills</h2>
        <div class="flex flex-wrap gap-2">
          <Tag v-for='skill in ["Business Analysis", "Product Ownership", "Requirements Engineering"
            , "Requirements Management", "Functional Specification", "Process Modeling", "User Stories"
            , "Backlog Management", "Roadmapping", "Stakeholder Management", "Product Management", "UX / Product Design"]'
            :key='skill' :text='skill' type="primary" bg="light" />
        </div>
        <h2 class="text-xl font-semibold text-zinc-900 mt-10 mb-4">Networks</h2>
        <div class='flex flex-wrap gap-3'>
          <Button type="secondary" bg="light" size='sm' text='Freelancermap'
            href='https://www.freelancermap.de/profil/ux-und-product-consultant'>
            <FreelancermapIcon />
          </Button>
          <Button type="secondary" bg="light" size='sm' text='Junico'
            href='https://www.junico.de/freelancer/johannes-118'>
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
import Tag from '@/components/elements/Tag.vue'
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
    Tag,
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
    gap: 64px;
  }
}
</style>
