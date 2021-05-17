<template>
	<div>
		<project-header :route='"/scenariomanager"'></project-header>
		<div class='responsive'>
			<h2>TLDR</h2>
			<p>scenario manager stub</p>
			<h2>Problem</h2>
			<p>The scenario manager is a core component of valsight. Financial decision makers can use it to set up different scenarios (Worst Case, Best Case). Over the years it has grown to contain a lot of different functionality. More complex scenarios drove it to the edge of being easy-to-use. The goal was to speak to customers and consultants to find out what would be needed to make this better.</p>
			<h2>Interviewing</h2>
			<p>Interviewing took place in the course of 1 month. Participants included 2 customers (remote) and 3 consultants (internal). There were around 10 prepared questions but I also skipped questions that were not applicable for the customer or consultant or asked again if somebody was very interested in a specific topic.</p>
			<p>Interviews were audio recorded and transcribed later. Utterings were put on dashes with line breaks if there was a new topic.</p>
			<h2>Clustering of answers</h2>
			<styled-image
        :src='require("../../assets/scenariomanager/table.jpg")'
        alt='Getting ready for clustering' />
			<p>I printed out the interviews on paper, cut them into small snips of a few sentences each and marked them with the participant. Then I started to take one snip by one putting them on a whiteboard and writing a broader topic or theme to them.</p>
			<styled-image
        :src='require("../../assets/scenariomanager/01-some-snips.jpg")'
        alt='Getting ready for clustering' />
			<p>Soon bigger topics started to emerge and I needed to rearrange the snips to make room for new topics.</p>
			<styled-image
        :src='require("../../assets/scenariomanager/02-all-snips.jpg")'
        alt='Getting ready for clustering' />
			<p>After that I removed smaller topics with only a few snips away and documented them shortly in a text document. The rest of the topics I grouped into seven bigger topics. These were: </p>
			<styled-image
        :src='require("../../assets/scenariomanager/04-more-topics.jpg")'
        alt='Getting ready for clustering' />
			<styled-image
        :src='require("../../assets/scenariomanager/05-all-topics.jpg")'
        alt='Getting ready for clustering' />
			<ul>
				<li>Mass of assumptions</li>
				<li>Understanding assumptions</li>
				<li>Back and forth</li>
				<li>Understanding change</li>
				<li>Assumption does not equal assumption</li>
				<li>Gamfication/Playground</li>
				<li>Creating assumptions</li>
			</ul>
			<p>These topics were presented to my product manager and we decided which topics we would focus on and which to address later.</p>
			<h2>Brainstorming solutions</h2>
			<styled-image
        :src='require("../../assets/scenariomanager/brainstorming-sideshot.jpg")'
        alt='Getting ready for clustering' />
			<p></p>
			<p>Together with the development we brainstormed solutions to those problems but I also added ideas later myself and tried to illustrate each one with a small graphic so it would stick in my head easier.</p>
			<p></p>
			<h2>Refining/choosing solutions</h2>
			<p></p>
			<p></p>
			<p>
				<ul>
					<li>with rnd</li>
					<li>further internal testing</li>
				</ul>
			</p>
			<h2>Implementations</h2>
			<p>
				<ul>
					<li>X Scenario Manager Suche</li>
					<li>X Worksheet colors</li>
					<li>0 alternative data input (Prototyp)</li>
					<li>0 Variants</li>
					<li>/ Freeze panes</li>
					<li>/ Jump to SM</li>
					<li>X Workspace header/tile redesign</li>
				</ul>
			</p>
			<p>TODO Screenshots/gifs</p>
			<h2>Learnings</h2>
			<p>Depending on the amount of accuracy of the transcription it took me around 3-4 times the duration of the interview. I highly underestimated the amount of time that went into that. But in the end it payed off to be able to better interpret the saying in the context of what was said and sometimes I still go back to search for a topic that I remembered appearing in one of the interviews to see what a participant said about it. Also good quotes stick easier in your head than interpretations that are not salient enough.</p>
			<p>I also included the positive feedback I gathered in the interviews and gave it back to the development team because I think it is important to not only focus on the bad stuff but also on the good work that one has done.</p>
			<p>Ideas that are not really tangible quickly fade away in the minds of the others.</p>
		</div>
		<project-arrows :route='"/scenariomanager"'></project-arrows>
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
