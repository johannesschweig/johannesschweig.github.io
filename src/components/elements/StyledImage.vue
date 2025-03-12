<template>
	<div id='container'>
		<img
      v-if='!isVideo'
      :class='["img-md", {
				"md:drop-shadow-sm": shadow,
				"rounded-2xl": rounded,
			}]'
      :src='src'
      :alt='alt' />
		<video
      v-if='isVideo'
      :class='["img-md", {
				"md:drop-shadow-sm": shadow,
				"rounded-2xl": rounded,
			}]'
      autoplay
      muted
      loop>
			<source :src='src' type='video/mp4' />
				Your browser does not support the video tag.
		</video>
		<div class='body2'>{{ alt }}</div>
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

<style scoped>
#container {
	display: block;
	padding-top: 12px;
	margin-top: 12px;
	margin-bottom: 24px;
}

.body2 {
	padding-top: 12px;
	padding-bottom: 12px;
	text-align: center;
	color: var(--dark-300);
}

.img-sm, .img-md, .img-lg {
	margin-left: auto;
	margin-right: auto;
	display: block;
}

.img-lg {
	max-width: 100%;
}

@media screen and (max-width: 768px) {
	.img-sm, .img-md {
		max-width: 100%;
	}
}

@media screen and (min-width: 768px) {
	.img-sm {
		max-width: 50%;
	}

	.img-md {
		max-width: 70%;
	}
}
</style>
