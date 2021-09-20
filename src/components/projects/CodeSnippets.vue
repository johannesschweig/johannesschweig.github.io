<template>
	<div>
		<project-header :route='"/codesnippets"'></project-header>
		<div class='responsive'>
			<h4>TL;DR</h4>
			<p>I designed an interface where users can input multiple "code snippets" to transform their data.</p>
			<h4>Problem</h4>
			<styled-image :src='require("../../assets/codesnippets/3vs1.png")' alt='Combine three nodes into one' />
			<p>A project I worked on for KNIME was to create an interface for a node (KNIME term for encapsulated functionality) where users can create small code snippets to manipulate data. For example, users might want to create a column with the mean of three other columns or cut the surname of a "name surname" formatted column. Previously, this was possible with a String Manipulation node for Strings, a Math Formula node for numerical data and a Rule Engine node for conditions. But what if you needed to alter Strings based on conditions? Then it gets complicated. The new node should make it easier for users to create more complex logic.</p>
			<h4>Research</h4>
			<styled-image :src='require("../../assets/codesnippets/code-versus.png")' alt='Use of space in the String Manipulation interface' />
			<p>I analyzed the current UI and interaction of the already existing nodes and found out that they had several disadvantages:</p>
			<ul>
				<li>They were making poor use of space. UI components were getting a lot of space even though they were not as important as others (see image above).</li>
				<li>Checking if your piece of code was correct could only be done by running the node on all your available data. Depending on the amount of data this could take a while. When you realize then that the "+1" in your code should really have been a "-1" you have to change it and run it again. Seemed too tedious.</li>
			</ul>
			<h4>Concept</h4>
			<styled-image :src='require("../../assets/codesnippets/variations-codesnippets.png")' alt='Two concepts for the code editor: Columns, variables and functions in dropdowns (left) or in a tabbed interface (right)' />
			<p>I improved on these with a design that put the code textfield with a large amount of space in the center of attention. Adding columns, variables and functions was now one click away but this saved precious screen real estate. I also added a small "evaluate" functionality that would check your code on the first row of your data so you could iteratively improve your code snippet without having to run it on your entire data each time. On the top an overview of all the code snippets was presented and you could add more code snippets or alter existing ones. The UI for the code editor was designed to make it reusable in other nodes (e.g. filtering rows according to a code snippet with a boolean statement).</p>
			<h4>Evaluation</h4>
			<styled-image :src='require("../../assets/codesnippets/concept.png")' alt='Final UI concept' />
			<p>The overall reception was positive. Forum users as well as colleagues gave very enthusiastic feedback on the new functionality. One user even wrote a blogpost about the node calling it <a href='https://blog.statinfer.com/knime-multitasking-with-column-expressions-node/'>"The Swiss Army Knife"</a>.</p>
			<p>In the design, however, there is - as always - still room for improvement. The emancipated display of the upper "overview" and the lower "code editor" component does not make it entirely clear that a selection of a code snippet in the "overview" component would change the display in the "code editor" component. This drawback was however favored over a dialog-in-a-dialog design.</p>
			<p>Also, the design could guide new users better on how to start. They are presented with a blank textfield and a variety of UI components (much like opening a terminal for the first time). The functions which are the core of writing your snippet are hidden behind a dropdown. The aim of the design, however, was to create a good experience for experienced users who want to optimize their data manipulation workflows.</p>
			<p>On the whole, I am very content with the process and outcome of this project. I was involved from the research phase over the conceptual phase to the implementation and even helped with programming parts of the "code editor" component. Also, the feedback from the community shows that the hours you invest in research and ideation really pay off in the end.</p>
			<styled-image :src='require("../../assets/codesnippets/column_expressions.png")' alt='User interface as of KNIME Analytics Platform v3.7.1' />
		</div>
		<project-arrows :route='"/codesnippets"'></project-arrows>
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
