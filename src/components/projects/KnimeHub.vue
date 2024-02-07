<template>
	<div>
		<project-header :route='"/knimehub"'></project-header>
		<div
      id='knimehub'
      class='responsive body1'>
      <h4>TL;DR</h4>
      <p>I helped to build a website where data scientists can read up on existing functionality of the desktop application. This website also enables them to share and collaborate on data analysis projects.</p>
			<h4>Introduction</h4>
			<p>KNIME develops a data science software which lets users create data analysis workflows with small blocks called "nodes" in a graphical programming paradigm. The community is big and vibrant and we wanted to give users a platform where they can help each other out and work together on general purpose solutions for common data science problems (e.g. churn prediction, anomaly detection). As the UX Designer on the team I was given the task to create a first prototype for the information architecture and the interaction design.</p>
      <h4>User and task analysis</h4>
      <p>At first I wanted to find out users shared and collaborated with already existing tools. I interviewed 9 internal data scientists on their usage of similar products. I was especially interested in how they make their own work understandable to others and what helps them to understand other people's work (e.g. text descriptions, screenshots, oral explanations, visual cues).</p>
			<styled-image
        :src='buildURL("knimehub/quotes.png")'
        alt="Quotes from the interviews"
        :shadow='false' />
      <p>From this research I identified challenges that were only poorly addressed by existing solutions. For example, a big challenge for users was the first time they try to use a new node. Sometimes the user did not know what the node could do, sometimes they were not sure how to set it up and sometimes they tried it out and it did not work the way they expected it to.</p>
			<styled-image
        :src='buildURL("knimehub/node-issues.png")'
        alt="User challenges with nodes"
        :shadow='false' />
      <p>With these challenges in mind we decided on what user stories to focus and defined the most important features for the KNIME Hub:</p>
      <ul>
        <li>Search for nodes: Users can search for nodes and determine if they are a good fit for their data science problem.</li>
        <li>Search for workflow: Users can search for example workflows that explain a specific data science problem.</li>
        <li>Install nodes: When users have found the right node, they can install it easily by drag-n-dropping it into the desktop application.</li>
        <li>Link nodes/workflows: Users can share links of node and workflow pages to provide other users with a nice way of referencing functionality in the desktop application.</li>
      </ul>
      <h4>Screen design</h4>
      <p>In this phase I ranked the content in importance and separated it onto different screens. I drew inspiration from online-communities where users share their content with others (node-red, chefkoch, youtube, soundcloud).</p>
			<styled-image
        :src='buildURL("knimehub/communities.png")'
        alt="Node-RED: a similar online community" />
      <p>I created four pages: A landing page with search, a search results page, a page for nodes and one for workflows. I created links between the pages which should help the users to find what they need.</p>
			<styled-image
        :src='buildURL("knimehub/wireframes-rough.png")'
        alt="First wireframes" />
      <p>The first version of the wireframes were discussed in the team and additional content was added. In a second iteration I aimed for higher fidelity in the wireframes and focused more on the layout of the pages. This second version was used for communication to internal stakeholders.</p>
			<styled-image
        :src='buildURL("knimehub/wireframes-refined.png")'
        alt="Second, more refined wireframes" />
      <h4>Final visual design and building</h4>
      <p>The final visual design was done by an external designer. I supported the development team during the building process and contributed by taking over small frontend tasks.</p>
      <h4>Launch</h4>
      <p>The KNIME Hub was released and opened to the public during the KNIME Summit in March 2019. Since then it has received great interest and a growing community of active users. From March until October I assisted in the further development of features such as a deeper integration to the desktop application.</p>
      <p>Check it out at <a class='link' href="https://hub.knime.com">hub.knime.com</a>.</p>
			<styled-image
        :src='buildURL("knimehub/screens-11-19.png")'
        alt="Screens of the application as of Nov. 19" />
		</div>
		<project-arrows :route='"/knimehub"'></project-arrows>
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
		'project-arrows': projectArrows,
	},
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>