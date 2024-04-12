<template>
	<div id='container'>
		<img
      v-if='!isVideo()'
      :class='["img-md", { "shadow": shadow }]'
      :src='src'
      :alt='alt' />
		<video
      v-if='isVideo()'
      :class='["img-md", { "shadow": shadow }]'
      autoplay
      muted
      loop>
			<source :src='src' type='video/mp4' />
				Your browser does not support the video tag.
		</video>
		<div class='body2'>{{ alt }}</div>
	</div>
</template>

<script>
export default {
	props: {
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
    }
	},
	methods: {
		// returns true if the source is a video, false if it is something else (e.g. image)
		isVideo() {
			if (this.$props.src.endsWith('.mp4') | this.$props.src.endsWith('.webm')) {
				return true
			} else {
				return false
			}
		}
	}
}
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

	img.shadow,
  video.shadow {
		-webkit-filter: drop-shadow(0 1px 3px #ccc);
		filter: drop-shadow(0 1px 3px #ccc);
	}
}
</style>
