<template>
	<div>
		<project-header :route='"/greenbox"'></project-header>
		<div id="greenbox" class='responsive'>
			<h4>TL;DR</h4>
			<p>As part of a university course a design team and a UX research team helped a startup to improve their gardening app. I contributed with planning, conducting and evaluating usability tests as part of the UX research team (3 persons in total).</p>
			<h4>Problem</h4>
			<styled-image :src='require("../../assets/greenbox/greenbox_v1.jpg")' alt="First version of the gardening app" />
			<p><i>Grüner Daumen</i> ("Green thumb") is an upcoming gardening app that is designed to inspire and support users with their plant care. The client had questions regarding the usability and design of their application:</p>
			<ul>
				<li>Is the workflow in agreement with the users' expectations?</li>
				<li>Does the app feel inutitive and easy to use?</li>
				<li>Do users perceive the app as playful and yet legitimate?</li>
			</ul>
			<h4>First usability test (my team)</h4>
			<styled-image :src='require("../../assets/greenbox/greenbox_app3.png")' alt="Usability test with the gardening app" />
			<p>In a first usability test participants were introduced to the app with a scenario and asked to perform several tasks while thinking aloud. We recorded the participant's interactions with the application with a camera and evaluated them later. The participants answered two questionnaires (QUESI, meCUE) rating the intuitiveness and the overall impression of the product. Additionally, the team conducted a heuristic analysis (following Jakob Nielsen) to identify usability problems. The insights generated from these methods were condensed and forwarded to the design team.</p>
			<h4>Redesign (design team)</h4>
			<styled-image :src='require("../../assets/greenbox/greenbox_v2.jpg")' alt="Redesigned version of the gardening app" />
			<p>The design team used the collected insights from the testing and the heuristic analysis to produce a redesigned version of the app.</p>
			<h4>Second usability test (my team)</h4>
			<p>In a second usability test the redesigned version was evaluated and the results compared to the results of the first version. The same methods were used as in the first usability test to allow for better comparison. Users experienced less problems with the redesigned version and rated it also higher on all scales of the questionnaires.</p>
			<h4>Reflection</h4>
			<styled-image :src='require("../../assets/greenbox/greenbox_presentation.png")' alt="Final presentation Greenbox" />
			<p>During this project I learnt a lot about the design, conduction and evaluation of usability tests. Experiencing that the insights generated through our group's work were of great use for the startup was a big motivational factor. The cooperation and communication between the design team, the UX research team and the startup was challenging, but rewarded us with different perspectives and insights in the process.</p>
			<h4>Testimonial (german)</h4>
			<p>"Wir entwickeln momentan eine Smartphone-App und haben uns bei UseTree beworben, weil wir die Abfolge von Bedienschritten für eine innovative Anwendung evaluieren lassen wollten. Daneben war es uns wichtig, herauszufinden, inwieweit wir die Balance zwischen einer spielerischen Bedienung und einem seriösen Design hinbekommen. Das Zusammenspiel von Arbeitspsychologen und Designern im sogenannten Staffellauf, bei dem beide Seiten abwechselnd dieselbe Fragestellung bearbeiten, haben wir als sehr bereichernd und konstruktiv empfunden. Durch die Teilnahme wurde unser Blick für Usability-Fragestellungen maßgeblich geschärft. Zudem haben wir Tools an die Hand bekommen, um diese Fragen zukünftig inhouse weiter bearbeiten zu können. Das Designteam begeisterte uns mit kreativen und hochwertigen Vorschlägen, die wir direkt in die Weiterentwicklung aufnehmen. Nicht zuletzt war ich von der engagierten und offenen Art von UseTree angetan und empfand die Zusammenarbeit als sehr inspierierend." - Gesche Heitmann (Gründerin)</p>
		</div>
		<project-arrows :route='"/greenbox"'></project-arrows>
	</div>
</template>

<script>
import ProjectHeader from '../elements/ProjectHeader.vue'
import StyledImage from '../elements/StyledImage.vue'
import projectArrows from '../elements/ProjectArrows.vue'

export default {
	components: {
		'project-header': ProjectHeader,
		'styled-image': StyledImage,
		'project-arrows': projectArrows,
	}
}
</script>