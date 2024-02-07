<template>
	<div>
		<project-header :route='"/phoenix"'></project-header>
		<div class='responsive'>
			<h4>TL;DR</h4>
			<p>In my free time I programmed a music player and expanded on it over the years. I learnt a lot about User-Centered Design, software engineering and making use of stackoverflow.</p>
			<h4>Problem</h4>
			<p>I was faced with the challenge of still having a lot of mp3s lying around but no suitable software to play and manage them. As streaming services such as Spotify take over traditional music players have shifted their focus (iTunes) or were abandoned all together (Winamp). So I decided to built a desktop music player suited for my own needs.</p>
			<h4>Research</h4>
			<p>I tried to specify the context of use and the requirements for the music playing application. I identified the following:</p>
			<ul>
				<li>Continuous background playback via a suggestion system (similar to YouTube's AutoPlay)</li>
				<li>A fast search for titles, artists, albums</li>
				<li>Good performance at low resource consumption</li>
			</ul>
			<p>After that, I studied competing products: iTunes, Winamp, MediaMonkey and Windows Media Player. In what way did they fulfill their goals? What are their shortcomings? All of these applications provide a lot of functionality (playlists, file management, tag writing, equalizer and additional settings) and the user is generally expected to actively cue in his/her songs (except Genius-playlists by iTunes). A lot of space in the user interfaces of these applications is taken up by toolbars, menus, cover previews and large context menus. Also, old UI concepts are still in use such as the tree view navigation. Colors and style are mainly aimed to transport the corporate identity of the manufacturing company (WMP by windows, iTunes by apple).</p>
			<h4>Prototyping</h4>
			<styled-image :src='require("../../assets/phoenix/paper_prototype.jpg")' alt='UI concept on paper' />
			<p>I transitioned from a low fidelity prototype on paper to a photoshop mockup to a fully-functioning Java prototype.</p>
			<styled-image :src='require("../../assets/phoenix/mockup_ps.jpg")' alt='Photoshop mockup of the application' />
			<h4>Evaluation</h4>
			<p>During the use of the application I documented design flaws, bugs and possible improvements. These were then incorporated in the next version of the application. This iterative process of use and improvement led to a constant development cycle. At first, I made changes and added functionality in rapid succession, but often realized in hindsight that the change did not integrate very well with the rest of the application or provided too little value compard to its development costs. Later in the project I spend more time elaborating on possible features which made my work more sustainable and time-efficient.</p>
			<styled-image :src='require("../../assets/phoenix/shuffle_tooltip.png")' alt='Left: Mouseover effects of the shuffle button: none, hover, active; Right: Photoshop mockup of the application' />
			<p>Five key questions followed me during that process:</p>
			<ul>
				<li>How do I provide a visual design that is consistent in colors, icons, animations, hover/interaction effects, element sizes, state of ui elements and affordances?</li>
				<li>What is the 'product identity' (aka corporate indentity) of Phoenix?</li>
				<li>How do I provide meaningfull and appropriate (error) feedback?</li>
				<li>What are the needs of the user and what implications do they have on the functionality of the software?</li>
				<li>How do I identify core use cases and choose the suitable interaction paradigm (e.g. search, buttons)?</li>
			</ul>
			<h4>Design features</h4>
			<styled-image :src='require("../../assets/phoenix/coverflow.mp4")' alt='Coverflow animation when changing tracks' />
			<p>Apart from the common media control I implemented three core design features:</p>
			<ol>
				<li>Auto-Dj: This functionality uses mp3 tag information to generate music suggestions (similar to populat AutoPlay functionalities in YouTube or Souncloud). It provides three modes of operation which start up once the user reaches the end of the tracklist.</li>
				<ul>
					<li>Random track: Adds an unknown track that is similar to the last one.</li>
					<li>Random favourite track: Adds a favourite track of the user that is similar to the last one.</li>
					<li>Random track from album or artist: Adds a track from the same artist or album like the previous track.</li>
				</ul>
				<li>Overlay with information about current track: Shows a short overlay containing information about the currently played track in the top right corner. As the overlay appears on top of all other windows this functionality is well suited to check back on your music while having it play in the background.</li>
				<li>Search: A SQL backend allowed for very fast and compley queries even with large music databases and made the search lightning fast.</li>
			</ol>
			<h4>Reflection</h4>
			<p>During the iterations of implementation-testing I learnt how to get more efficient in my own workflow and how to counterbalance design and functionality. The experience from my university courses and the job at UseTree about usability, UX and user-centered design guided me through this process. Furthermore, I learnt how to prioritze features and implement only the ones that were important, sustainable and time-efficient. Apart from that my software development skills improved dramatically as I got more proficient in the Java language, the JavaFX frontend framework, SQL and different libraries.</p>
			<p><a class='link' href='https://github.com/johannesschweig/Phoenix'>View project on GitHub</a></p>
			<h4>Successor: PhoenixJS</h4>
			<styled-image :src='require("../../assets/phoenix/wireframe_ps_js.png")' alt='Wireframe of the Javascript application' />
			<p>In the course of the project I often felt restrained by the limited capabilites of the JavaFX frontend framework. Also, even though I tried, I could never really separate functionality in Model-View-Controller resulting in a messy code base. And in the end I needed a good reason to learn JavaScript, so I decided to rewrite the application with React and Redux. I used nedb for the database part and deployed the whole application as a cross-platfrom compatible electron app.</p>
			<p><a class='link' href='https://github.com/johannesschweig/PhoenixJS'>View PhoenixJS on GitHub</a></p>
		</div>
		<project-arrows :route='"/phoenix"'></project-arrows>
	</div>
</template>

<script>
import ProjectHeader from '../elements/ProjectHeader.vue'
import StyledImage from '../elements/StyledImage.vue'
import projectArrows from '../elements/ProjectArrows.vue'

export default {
	data() {
		return {
			project: {route: '/phoenix'}
		}
	},
	components: {
		'project-header': ProjectHeader,
		'styled-image': StyledImage,
		'project-arrows': projectArrows,
	}
}
</script>