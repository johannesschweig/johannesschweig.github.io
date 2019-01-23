<template>
	<div>
	<project-header :route='"/greenbox"'></project-header>
	<div id="greenbox" class='responsive'>
		<h2>TLDR</h2>
		<p>In a university course a design team and a UX research team (2+me) helped a startup to improve their gardening app with usability testing and redesign.</p>
		<h2>Origin</h2>
		<styled-image :src='require("../../assets/greenbox/greenbox_v1.jpg")' alt="First version of the gardening app"></styled-image>
		<p><i>Grüner Daumen</i> is an upcoming gardening app that is designed to inspire and support users with their plant care. Greenbox had questions regarding the usability and design of their application:</p>
		<ul>
			<li>Is the workflow in agreement with the users' expectations?</li>
			<li>Does the app facilitate inutitive and easy use?</li>
			<li>Do users perceive the app as playful and yet legitimate?</li>
		</ul>
		<h2>1st usability test (UX research team)</h2>
		<styled-image :src='require("../../assets/greenbox/greenbox_app3.png")' alt="Usability test with the gardening app"></styled-image>
		<p>In a first usability test participants were introduced to the app with a scenario and asked to perform several tasks while thinking aloud. The participant's interactions with the application was recorded with a camera and evaluated later. Two questionnaires (QUESI, meCUE) were employed to assess the intuitiveness and the overall impression of the product. Additionally, a heuristic analysis (following Nielsen) was performed by the UX research team. The insights genereated from these methods were condensed and forwarded to the design team. </p>
		<h2>Redesign (design team)</h2>
		<styled-image :src='require("../../assets/greenbox/greenbox_v2.jpg")' alt="Redesigned version of the gardening app"></styled-image>
		<p>The design team used the collected insights to produce a redesigned version of the app.</p>
		<h2>2nd usability test (UX research team)</h2>
		<p>In a second usability test the redesigned version was evaluated and the first version compared with the redesigned version. The same methods were used as in the first usability test to allow for better comparison. Users experienced less problems with the redesigned version and rated it also higher in all categories. Further ideas for improvement could be identified during the second test.</p>
		<h2>Reflection</h2>
		<styled-image :src='require("../../assets/greenbox/greenbox_presentation.png")' alt="Final presentation Greenbox"></styled-image>
		<p>During this project I learnt a lot about the design, conduction and evaluation of usability tests. Experiencing that the insights generated through our group's work were of great use for the startup was a big motivational factor. The cooperation and communication between the design team, the UX team and the startup was challenging, but rewarded us with different perspectives and insights in the process.</p>
		<h2>Testimonial (german)</h2>
		<p>"Wir entwickeln momentan eine Smartphone-App und haben uns bei UseTree beworben, weil wir die Abfolge von Bedienschritten für eine innovative Anwendung evaluieren lassen wollten. Daneben war es uns wichtig, herauszufinden, inwieweit wir die Balance zwischen einer spielerischen Bedienung und einem seriösen Design hinbekommen. Das Zusammenspiel von Arbeitspsychologen und Designern im sogenannten Staffellauf, bei dem beide Seiten abwechselnd dieselbe Fragestellung bearbeiten, haben wir als sehr bereichernd und konstruktiv empfunden. Durch die Teilnahme wurde unser Blick für Usability-Fragestellungen maßgeblich geschärft. Zudem haben wir Tools an die Hand bekommen, um diese Fragen zukünftig inhouse weiter bearbeiten zu können. Das Designteam begeisterte uns mit kreativen und hochwertigen Vorschlägen, die wir direkt in die Weiterentwicklung aufnehmen. Nicht zuletzt war ich von der engagierten und offenen Art von UseTree angetan und empfand die Zusammenarbeit als sehr inspierierend." - Gesche Heitmann (Gründerin)</p>
	</div>
</div>
</template>

<script>
import ProjectHeader from './ProjectHeader.vue'
import StyledImage from '../StyledImage.vue'

export default {
	components: {
		'project-header': ProjectHeader,
		'styled-image': StyledImage
	}
}
</script>

<style scoped>
h2 {
	font-size: 14px;
	font-weight: bold;
	color: var(--light);
	margin: 0 0 4px 0;
}

p {
	margin: 0 0 24px 0;
}
</style>
