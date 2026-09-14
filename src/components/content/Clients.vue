<template>
  <div class="bg-zinc-100 py-10">
    <div class="responsive">
      <div class="text-center text-xs font-medium tracking-widest text-zinc-500 uppercase mb-6">Trusted by delivery teams at</div>
      <div class="max-w-[90vw]">
        <Vue3Marquee :gradient="true" :gradientColor="[244, 244, 245]" :pauseOnHover="true" class="">
          <component :is="clientIcon" v-for="clientIcon in clientIcons" class="h-7 w-auto text-zinc-400 hover:text-zinc-600 transition-colors duration-150 mx-8" />
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