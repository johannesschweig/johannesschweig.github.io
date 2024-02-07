<template>
	<div>
		<project-header :route='"/mechanics"'></project-header>
		<div class='responsive'>
			<h4>TL;DR</h4>
			<p>During my work for UseTree we tested the usability of an application with maintenance workers. The aim of the application is to allow for easy and sustainable transfer of knowledge.</p>
			<styled-image
        :src='buildURL("mechanics/mechanics_app.png")'
        alt='Tablet with app and engine' />
			<h4>Origin</h4>
			<p>Our client developed an app that should help mechanics with the repair of subway engines. Mechanics can view different material (photo, video,...) on the repair procedure of an engine and even record video themselves. The leading question was if the application provided substantial help for the work of the mechanics.</p>
			<styled-image
        :src='buildURL("mechanics/mechanics_interview.png")'
        alt='On-the-job interview with mechanic' />
			<h4>Field usability test</h4>
			<p>During a field test at a repair shop I conducted testings with two mechanics each lasting one hour. The test included a exploration phase of the application and an interview afterwards. The test focused on the future use case of the application and was aimed to generate insights into the work processes and the integration of the application in these processes. It was set in a challenging environment: Limited time of the worker, loud noises in the repair shop, sparse familiarity with usability testing of the worker.</p>
      <h4>Lab usability test</h4>
      <p>An additional test in a usability lab focused on the usability aspects of the application. Four students participated in this study.</p>
			<styled-image
        :src='buildURL("mechanics/workflow.png")'
        alt="Diagram of the application's workflow" />
      <h4>Evaluation</h4>
      <p>The client was involved in all stages of test conduction and evaluation. This imparted basic usability competencies to the client and was aimed to integrate user-centered design in the client's workflow. The evaluation of the two tests generated valuable insights for the future development of the application. Several problems were identified regarding the integration of the app at the workplace and new ideas could be collected on how to achieve such an integration in a sustainable manner. The usability test unveiled room for improvement of the ease of use.</p>
      <h4>Reflection</h4>
      <p>I carried out a majority of the field test planning and was the on-site examiner. Thus, I learnt a lot about the internal work processes of the mechanics in the repair shop. This project enhanced my knowledge of usability test design as the field test was set in a challenging environment. Finally, I learnt how to condense knowledge about the work situation, context of use and the functionality of the application to create a vision of a use case of maximum benefit.</p>
      <h4>Testimonial (german)</h4>
      <p>"Mit Hilfe von UseTree konnten wir das Usability-Konzept unserer Anwendung erfolgreich überprüfen und optimieren. UseTree lieferte wertvolle Hinweise und Verbesserungsansätze und überzeugte uns durch eine professionelle Arbeitsweise und ein hohes Maß an Kreativität. Wir können UseTree als Dienstleister uneingeschränkt weiterempfehlen und freuen uns auf künftige gemeinsame Projekte." - André Fiedler (Projektleiter)</p>
		</div>
		<project-arrows :route='"/mechanics"'></project-arrows>
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