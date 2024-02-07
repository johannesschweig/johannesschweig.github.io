<template>
	<div>
		<project-header :route='"/trafficticket"'></project-header>
		<div class='responsive'>
			<h4>TL;DR</h4>
			<p>I was the project lead for a big car rental company building a system that automatically processed traffic
				tickets.</p>
			<p>The nature of this work is confidential. <a class="link" href='mailto:hello@johannesschweig.de'>Contact me </a>for the
					password.</p>
			<Icon size='32' text='Download the PDF' :href='require("../../assets/trafficticket/trafficticket.pdf")'>
			</Icon>
		</div>
		<project-arrows :route='"/trafficticket"'></project-arrows>
	</div>
</template>

<script>
import ProjectHeader from '../elements/ProjectHeader.vue'
import projectArrows from '../elements/ProjectArrows.vue'
import Icon from '@/components/elements/Icon'

export default {
	data() {
		return {
			project: { route: '/phoenix' }
		}
	},
	components: {
		'project-header': ProjectHeader,
		'project-arrows': projectArrows,
		Icon,
	}
}
</script>