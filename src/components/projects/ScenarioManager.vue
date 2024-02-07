<template>
	<div>
		<project-header :route='"/scenariomanager"'></project-header>
		<div class='responsive body1'>
			<h4>TL;DR</h4>
			<p>I led a discovery project aiming to improve a core functionality in a web application. I interviewed customers and internal stakeholders. As a result a couple of smaller fixes and a big feature were developed.</p>
			<h4>Problem statement</h4>
			<p><a class='link' href='https://www.valsight.com/'>Valsight</a> offers a financial planning solution for big companies. One of the core features is the “scenario manager” where you can create and modify assumptions (+10% more sales next year) and add them to scenarios (best case). Historically grown, it was very complex to understand and use. My task was to talk to users and figure out a way to make it easier to understand and better to use.</p>
      <p>The initial timeline for the project was set to 3 weeks. I proposed a project plan with three phases starting with a research phase, then an ideation/creation phase and finally a validation phase. In the end we wanted to have wireframes that we could create stories for and make part of a sprint. In the following, I will focus on the way I conducted the customer interviews and condensed the findings.</p>
			<styled-image
        :src='buildURL("scenariomanager/project-plan.png")'
        alt='Plan for the project' />
      <h4>Research</h4>
      <h5>Customer interviews</h5>
      <p>I prepared a semi-structured interview with around 10 questions asking about</p>
      <ul>
        <li>The current usage of the scenario manager</li>
        <li>What worked well and what did not</li>
        <li>What information was important to them and what not</li>
        <li>How they worked with the scenario manager</li>
        <li>Who worked with it the most and how they collaborated as a team</li>
      </ul>
      <p>I skipped questions that were not applicable for the participant or asked again if there was a chance to gain more insights by diving deeper into a topic.</p>
      <p>We managed to recruit customers from four companies and I talked to three internal consultants. The interviews were audio recorded and transcribed later.</p>
      <h5>Condense findings</h5>
      <p>I printed out the interview protocols on paper and cut them into small snips of a few sentences each. Then I started a <a class='link' href='https://www.thisisservicedesigndoing.com/methods/building-a-research-wall'>data wall</a> where I grouped snips to broader topics. After that I removed smaller topics to focus on the big topics that started to emerge.</p>
			<styled-image
        :src='buildURL("scenariomanager/snip-gif.mp4")'
        alt='Data wall with snips moving into bigger topics' />
      <h4>Ideation/Creation</h4>
      <h5>Present findings</h5>
      <p>I presented these topics to my product manager and we decided which topics we would prioritize for now.</p>
			<styled-image
        :src='buildURL("scenariomanager/mass-ass-slide.jpg")'
        alt='Mass of assumptions was one bigger topic' />
      <h4>Development</h4>
      <p>A couple of smaller features were developed right after concluding the validation with customers. A search functionality was added to the scenario manager to find items in the list faster. Also, a couple of visual tweaks were made to the scenario manager and a convenient keyboard shortcut for faster navigation was introduced.</p>
      <p>We had a bigger feature idea about grouping similar assumptions together and making it easier to switch between them. This idea was further iterated and refined until it was ready to be developed and shipped.</p>
			<styled-image
        :src='buildURL("scenariomanager/variants.jpg")'
        alt='Assumptions are grouped using "variants"' />
      <h4>Learnings</h4>
      <p>In hindsight, I was proud and amazed at how often I would come back to my findings for related topics or just look at the written protocols if I vaguely remembered somebody having said something similar in one of the interviews. A powerful quote from a user really sticks in your head!</p>
      <p>I also enjoyed passing back the positive feedback from the interviews to the developers. They certainly deserved it.</p>
      <p>The project also inspired lots of people involved in building the product and served as a source of feature ideas for the future.</p>
      <p>On the other hand, the problem statement could have been clearer. The broad scope of it allowed for a lot of valuable exploration to happen, but it also felt like it was not worth the effort at times. Changing something is very hard if it has been at the core of an application for many years. Usually, there are good reasons why it is the way it is and users are not happy to have their workflow changed.</p>
    </div>
		<project-arrows :route='"/scenariomanager"'></project-arrows>
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