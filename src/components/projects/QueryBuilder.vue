<template>
	<div>
		<project-header :route='"/querybuilder"'></project-header>
		<div class='responsive'>
			<h2>TLDR</h2>
			<p>I helped to build a functionality which lets users filter their data based on multiple, nested criteria.</p>
			<h2>Problem</h2>
			<styled-image :src='require("../../assets/querybuilder/sql.png")' alt='The beauty of SQL' />
			<p>During my time at KNIME I was asked to create an interface for a node (KNIME term for encapsulated functionality) where users can filter their data based on multiple rules (e.g. filter out all rows in the data where the year column is smaller than 2016).</p>
			<p>The existing solution only supported one rule and the aim was to extend the functionality, so it could also work with multiple rules and it should be possible to nest rules (e.g. [condition A AND condition B] OR condition C). Users would not have to worry anymore about writing their queries in SQL because they could comfortably build them in a UI. This has several advantages:</p>
			<ul>
				<li>Avoiding typos by using dropdowns and other UI components</li>
				<li>Faster rule generation with suggestions (e.g. possible values of columns)</li>
				<li>Better understanding through hierarchical display of rules (if you have once tried to make sense of another person's excel formulas, you know what I mean)</li>
			</ul>
			<h2>Research</h2>
			<styled-image :src='require("../../assets/querybuilder/querybuilders.png")' alt='Querybuilders by jQuery (left) and Microsoft Outlook (right)' />
			<p>I researched about how others have tried to solve this problem and found a number of different user interfaces. Some of them represented their rules as a graph, some of them as a nested list. And they also differed in how they made the actions such as creating or deleting rules available to the user.</p>
			<h2>Ideation</h2>
			<p>Then I proceeded to explore the problem space with sketches. This brought up questions such as:</p>
			<ul>
				<li>How many different combinations of nested rules could there be? (A lot)</li>
				<li>How do you present the rules to the user? Inline forms / Graph preview / treeview preview? (see image below)</li>
				<li>Do you connect items in a group with an AND/OR or do you set it to the top of the group?</li>
			</ul>
			<p>Trying to answer those questions helped to find possible solutions, narrowed the problem space, but also improved my understanding of the domain (Querying a database).</p>
			<h2>Variations</h2>
			<styled-image :src='require("../../assets/querybuilder/variations.png")' alt='Variations of rule representations: vertical graph, treeview, inline form, horizontal graph' />
			<p>I came up with a variation where the rules were laid out top to bottom, groups were indicated by different colored rectangles and you could edit the rules right in place (see inline form in image above). It quickly came apparent that this solution would fit for easy queries with few rules and few nesting levels, but not for very complex queries. Then I designed a version where you would have a preview section on one side and an edit section on the other. This would allow for easier layouting as you would only have to display the currently selected rule. All other rules were displayed with a small label. The display of the preview varied: vertical graph, horizontal graph or treeview.
			<h2>Testing</h2>
			<styled-image :src='require("../../assets/querybuilder/concept.png")' alt='Final UI concept' />
			<p>I created a small paper protoype and showed it to different colleagues. During the test the colleague had to press the buttons on the paper and I would (as responsively as I could) "slide in" the new UI elements ("Wizard of Oz prototyping"). After testing we decided that the AND/OR of groups should be positioned on top of them and not between the rules as our participants prefered by this. .</p>
			<p>In the end we decided for the treeview as it was easier to implement as the other concepts, was recognized as a familiar component by the users and also showed good results in user interaction.</p>
			<styled-image :src='require("../../assets/querybuilder/row-filter.png")' alt='User interface as of KNIME Analytics Platform v3.7.1' />
		</div>
		<project-arrows :route='"/querybuilder"'></project-arrows>
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
