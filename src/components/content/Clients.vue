<template>
  <div class="bg-dark-100 py-8">
    <div class="responsive">
      <div class="max-w-[90vw]">
        <Vue3Marquee :gradient="true" :gradientColor="[26, 28, 33]" :pauseOnHover="true" class="">
          <component :is="clientIcon" v-for="clientIcon in clientIcons" class="h-10 w-auto text-light-200 mx-8" />
        </Vue3Marquee>
      </div>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue'
import BoschIcon from '@/assets/landingpage/bosch.svg'
import KukaIcon from '@/assets/landingpage/kuka.svg'
import MbIcon from '@/assets/landingpage/mb.svg'
import TuevIcon from '@/assets/landingpage/tuev.svg'
import VwIcon from '@/assets/landingpage/vw.svg'
import { Vue3Marquee } from 'vue3-marquee'

export default {
  name: 'Clients',
  data() {
    return {
      clientIcons: [
        markRaw(KukaIcon),
        markRaw(MbIcon),
        markRaw(TuevIcon),
        markRaw(VwIcon),
        markRaw(BoschIcon),
      ]
    }
  },
  components: {
    BoschIcon,
    KukaIcon,
    MbIcon,
    TuevIcon,
    VwIcon,
    Vue3Marquee
  }
}
</script>