<template>
	<div class="pt-3 mt-3 mb-6">
		<img
      v-if='!isVideo'
      :class='["mx-auto md:max-w-7/10", {
				"md:drop-shadow-sm": shadow,
				"rounded-2xl": rounded,
			}]'
      :src='src'
      :alt='alt' />
		<video
      v-if='isVideo'
      :class='["mx-auto md:max-w-7/10", {
				"md:drop-shadow-sm": shadow,
				"rounded-2xl": rounded,
			}]'
      autoplay
      muted
      loop>
			<source :src='src' type='video/mp4' />
				Your browser does not support the video tag.
		</video>
		<div class='pt-4 pb-3 text-center text-sm text-dark-300'>{{ alt }}</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String
  },
  shadow: {
    type: Boolean,
    default: true
  },
	rounded: {
		type: Boolean,
		default: false,
	}
})

// Computed property to determine if the source is a video
const isVideo = computed(() => props.src.endsWith('.mp4') || props.src.endsWith('.webm'))
</script>