<template>
	<div>
		<project-header :route='"/trafficticket"'></project-header>
		<div class='responsive'>
			<h4>TL;DR</h4>
			<p>I was the project lead for a big car rental company building a system that automatically processed traffic tickets.</p>
			<h5>The nature of this work is confidential. I can tell you more about my involvement in private.</h5>
		</div>
		<project-arrows :route='"/trafficticket"'></project-arrows>
	</div>
</template>

<script>
import ProjectHeader from '../elements/ProjectHeader.vue'
import projectArrows from '../elements/ProjectArrows.vue'

export default {
	data() {
		return {
			project: {route: '/phoenix'}
		}
	},
	components: {
		'project-header': ProjectHeader,
		'project-arrows': projectArrows,
	}
}
</script>