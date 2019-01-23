<template>
	<div>
		<project-header :route='"/phoenix"'></project-header>
		<div class='responsive'>
			<h2>TLDR</h2>
			<p>In my free time I programmed a music player and expanded on it over the years. I learnt a lot about User-Centered Design, software engineering and making use of stackoverflow.</p>
			<h2>Problem</h2>
			<p>The popularity of musicplayers for desktops has dropped dramatically as streaming services have taken over their role. The development of applications like iTunes, Mediamonkey or Winamp is limited; their user interfaces cluttered with functionality. So I decided to built a desktop music player by myself.</p>
			<h2>Research</h2>
			<p><i>User Research: </i>In a user research phase I tried to find out what the context of use and the general requirements are for a music playing application for my needs. I found out that it needed to provide continous playback of music with suggestions, a fast search, good overall performance and it needed to be optimized for the use with large musiccollections. </p>
			<p><i>Design Research: </i>In a design research phase I studied competing products: iTunes, Winamp, MediaMonkey and Windows Media Player. In what way did they succeed at their goals? What are their shortcomings? All of these applications provide a lot of functionality (playlists, file management, tag writing, equalizer and additional settings) and the user is generally expected to actively cue in his/her songs (except Genius-playlists by iTunes). A lot of space in the user interfaces of these applications is taken up by toolbars, menus, cover previews and large context menus. Also, old UI concepts are still in use such as the tree view navigation. Colors and style are mainly aimed to transport the corporate identity of the affiliation of the product (WMP by windows, iTunes by apple).</p>
			<h2>Prototyping</h2>
			<styled-image :src='require("../../assets/phoenix/paper_prototype.jpg")' alt='UI concept on paper'></styled-image>
			<p>I transitioned from a low fidelity prototype on paper to a photoshop mockup to a fully-functioning Java prototype.</p>
			<styled-image :src='require("../../assets/phoenix/mockup_ps.jpg")' alt='Photoshop mockup of the application'></styled-image>
			<h2>Evaluation</h2>
			<p>During the use of the application I documented design flaws, bugs and possible improvements. These were then incorporated in the next version of the application. This iterative process of use and improvement led to a constant development cycle. At first, I made changes and added functionality in rapid succession, but often found out that the change did not integrate very well with the rest of the application, was too time-consuming or of too little value added. Later in the project I elaborated more on possible changes which made my work more sustainable and time-efficient.</p>
			<p>I identified five key questions that followed me during the process:</p>
			<styled-image :src='require("../../assets/phoenix/shuffle_tooltip.png")' alt='Left: Mouseover effects of the shuffle button: none, hover, active; Right: Photoshop mockup of the application'></styled-image>
			<ul>
				<li>How do I provide a visual design that is consistent in colors, icons, animations, hover/interaction effects, element sizes, state of ui elements and affordances?</li>
				<li>What is the 'product identity' (aka corporate indentity) of Phoenix?</li>
				<li>How do I provide meaningfull and appropriate (error) feedback?</li>
				<li>What are the needs of the user and what implications do they have on the functionality of the software?</li>
				<li>How do I identify core use cases and choose the suitable interaction paradigm (e.g. search, buttons)?</li>
			</ul>
			<h2>Design features</h2>
			<styled-image :src='require("../../assets/phoenix/coverflow.mp4")' alt='Coverflow animation when changing tracks'></styled-image>
			<p>Over the development process I implemented three core design features:</p>
				<ol>
					<li>Auto-Dj: A content-based recommender system that uses mp3 tag information to generate music recommendations. It is similar to the AutoPlay functionality by services such as Youtube and Souncloud, but allows for more user interaction. It provides four modes of operation which allow for continuous audio playback.</li>
					<ul>
						<li>Off: Play track list. Stop when it is depleted.</li>
						<li>+1 random: After the track list is depleted, add an unknown track that is similar to the last one.</li>
						<li>+1 favourite: After the track list is depleted, add a favourite track of the user that is similar to the last one.</li>
						<li>Album/Artist: After the track list is depleted, add a track from the same artist or album like the previous track.</li>
					</ul>
					<li>Info about current track: On keypress a short overlay is shown containing infos about the currently played track in the top right corner. This overlay appears on top of all other visible windows.</li>
					<li>Search: Fast and easy search is vital for the ease of use of all applications. I realized this with SQL which allows for very fast and compley queries even with large music databases.</li>
				</ol>
				<h2>Reflection</h2>
				<p> During the iterations of implementation-testing I learnt how to get more efficient in my own workflow and how to counterbalance design and functionality. The experience from my university courses and the job at UseTree about usability, UX and user-centered design guided me through this process. Furthermore, I learnt how to prioritze features and realize only the ones that were important, sustainable and time-efficient. Apart from that my software development skills improved dramatically as I got more proficient in the JAVA language, the JAVAFX Frontend, different libraries and SQL.</p>
				<p><a href='https://github.com/johannesschweig/Phoenix'>View project on GitHub</a></p>
				<h2>Outlook: PhoenixJS</h2>
				<styled-image :src='require("../../assets/phoenix/wireframe_ps_js.png")' alt='Wireframe of the Javascript application'></styled-image>
				<p>Currently I am porting Phoenix to JavaScript with Electron+React+Redux. Stay tuned!</p>
				<p><a href='https://github.com/johannesschweig/PhoenixJS'>View PhoenixJS on GitHub</a></p>
			</div>
		</div>
	</div>
</template>

<script>
import ProjectHeader from './ProjectHeader.vue'
import StyledImage from '../StyledImage.vue'

export default {
	data() {
		return {
			project: {route: '/phoenix'}
		}
	},
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
