<template>
	<div>
		<project-header :route='"/codesnippets"'></project-header>
		<div class='responsive'>
			<h2>TLDR</h2>
			<p>I designed an interface where users can input multiple "code snippets" to transform their data.</p>
			<h2>Problem</h2>
			<p>During my time at KNIME I was asked to create an interface for a node (KNIME term for encapsulated functionality) where users can create small code snippets to manipulate data. E.g. create a column with the mean of three other columns or cut the surname of a "name surname" formatted column. Previously, this was possible with a String Manipulation node for Strings, a Math Formula node for numerical data and a Rule Engine node for conditions. But what if you needed to alter Strings based on conditions? Then it gets complicated. The new node should make it easier for users to create more complex logic.</p>
			<h2>Research</h2>
			<p>I analyzed the current UI and interaction of the already existing nodes and found out that they had several disadvantages:</p>
			<ul>
				<li>They were making poor use of space. UI components were getting a lot of space even though they were not as important as others.</li>
				<li>Checking if your piece of code was correct could only be done by running the node on all your available data. Depending on the amount of data this could take a while. When you realize then that the "+1" in your code should really have been a "-1" you have to change it and run it again. Seemed too tedious.</li>
			</ul>
			<h2>Ideation / Concept</h2>
			<p>I improved on these with a design that put the code textfield with a large amount of space in the center of attention. Adding columns, variables and functions was now one click away but this saved precious screen real estate. I also added a small "evaluate" functionality that would check your code on the first row of your data so you could iteratively improve your code snippet without having to run it on your data each time. On the top you would have an overview of all the code snippets in this node and could add more code snippets or alter existing ones. The UI for the code block with the dropdown buttons on top was designed to make it reusable in other nodes (e.g. filtering rows according to a code snippet with a boolean statement).</p>
			<h2>Evaluation / Aftermath / Reflection</h2>
			<styled-image :src='require("../../assets/codesnippets/concept.png")' alt='Final UI concept'></styled-image>
			<p>The design, however, has its weaknesses. The emancipated display of the upper 'overview' and the lower 'code textfield' components carries confusing potential for the user also because the selection of code snippets on the top changes the content of the code textfield component. This drawback was however favored over a dialog-in-a-dialog design.</p>
			<p>Also, the design, does not include a lot of guidance for new users. They are presented with a blank textfield and a variety of UI components. The functions which are the core of writing your snippet are hidden away behind a dropdown. The aim of the design, however, was to create a good experience for experienced users who want to tune their data manipulation workflows.</p>
			<p>Forum users as well as colleagues gave very positive feedback on the new functionality and I greatly appreciate that as it shows that your work just made someones life a little easier.</p>
			<p>"Just want to say, THANKS. The new Column Expressions Node is a winner. Greatly increases productivity and workflow readability. Keep these types of nodes coming!" - <a href='https://forum.knime.com/t/column-expressions-is-another-winner-node-knime-3-6/11565'>clac2188 (Forum user)</a></p>
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
