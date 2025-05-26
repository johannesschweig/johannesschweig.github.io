<template>
	<div>
		<project-header :route='"/esgehtlos"'></project-header>
		<div class='responsive text-dark-200'>
			<h2 class="content-heading1">TL;DR</h2>
			<p>I helped to build a product that helps a NGO to organize their citizen councils. One of the big features was a feedback flow for citizens to respond to an invitation for a council and mention their needs.</p>
			<h2 class="content-heading1">Problem statement</h2>
			<p>Es geht los organizes citizen councils and has to manage all the candidates that they reached out to and their special needs (e.g. child care, mobility impairments). As there are many people involved it is hard to keep track of all the candidates without a proper tool. Our goal was to build such a tool to help them with keeping track of the candidates, perform statistically sound drawings, organize their agents and collect feedback from their candidates online.</p>
			<h2 class="content-heading1">Visual identity</h2>
			<styled-image
				:src='buildURL("esgehtlos/colors.png")'
				alt='Color palette. New colors are highlighted.' />
			<p>I expanded the existing visual identity (called "Giulia") to address all the needs of a web application. I expanded the color palette, set up a system for typography based on their existing typefaces and created the first components (buttons, checkboxes, textfields). I tailored the system to the CSS framework <a class='link' href='https://tailwindcss.com/'>Tailwind</a> which we used in development.</p>
			<styled-image
				:shadow='false'
				:src='buildURL("esgehtlos/typo.png")'
				alt='Typography scale' />
			<styled-image
				:shadow='false'
				:src='buildURL("esgehtlos/components.png")'
				alt='Components in different states' />
			<h2 class="content-heading1">Prototype "Feedback flow"</h2>
			<p>In this click prototype (German only) you can see the screens that a candidate goes through after being chosen for a citizen council. The candidate can tick special needs, accept or decline the invitation and give feedback to Es geht los.</p>
			<iframe
				class="border border-gray-300 w-full aspect-1/2" 
				src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FzGG70JdPaHszpgRP3uaXGb%2Fegl-portfolio%3Fnode-id%3D7%253A698%26viewport%3D241%252C48%252C0.11%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D7%253A698"
				allowfullscreen></iframe>
			<p>Click on the grey background and then restart (R) to restart the prototype.</p>
			<h2 class="content-heading1">Clients</h2>
			<p><a class='link' href='https://www.esgehtlos.org/'>Es geht los</a> is a German NGO and non-partisan think & do tank by Demokratie Innovation e.V. for lot-based ("losbasiert") citizen participation. They organize citizen councils on a local, national level and for public institutions. <a class='link' href='https://www.maibornwolff.de/'>MaibornWolff</a> offers consulting and software engineering for ambitious IT projects. I was staffed as the UI Designer in a Digital Garage project by MaibornWolff for Demokartie Innovation e.V..</p>
    </div>
		<project-arrows :route='"/esgehtlos"'></project-arrows>
	</div>
</template>

<script>
import ProjectHeader from '../elements/ProjectHeader.vue'
import StyledImage from '../elements/StyledImage.vue'
import projectArrows from '../elements/ProjectArrows.vue'
import { buildURL } from '@/utils'

export default {
	components: {
		'project-header': ProjectHeader,
		'styled-image': StyledImage,
		'project-arrows': projectArrows
	},
	methods: {
		buildURL(src) {
			return buildURL(src)
		}
	}
}
</script>
