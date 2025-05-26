<template>
	<div>
		<project-header :route='"/trafficticket"'></project-header>
		<div class='responsive text-dark-200'>
			<h2 class="content-heading1">TL;DR</h2>
			<p>I was the project lead for a big car rental company building a system that automatically processed traffic
				tickets.</p>
			<p>The nature of this work is confidential. <a class="link" href='mailto:hello@johannesschweig.de'>Contact me </a>for the
					password.</p>
			<Button type="primary" bg="light" size='sm' text='Download the PDF' :href='buildURL("trafficticket/trafficticket.pdf")'>
			</Button>
		</div>
		<project-arrows :route='"/trafficticket"'></project-arrows>
	</div>
</template>

<script>
import ProjectHeader from '../elements/ProjectHeader.vue'
import projectArrows from '../elements/ProjectArrows.vue'
import Button from '@/components/elements/Button.vue'
import { buildURL } from '@/utils'

export default {
	data() {
		return {
			project: { route: '/phoenix' }
		}
	},
	components: {
		'project-header': ProjectHeader,
		'project-arrows': projectArrows,
		Button,
	},
	methods: {
		buildURL(src) {
			return buildURL(src)
		}
	}
}
</script>