<template>
  <div>
    <ProjectHeader />
    <div class='responsive text-dark-200'>
      <h2 class="content-heading1">TL;DR</h2>
      <p>Together with the client, I clarified and prioritized the needs for a property management software to shape a
        focused MVP. I then translated these priorities into wireframes and design concepts for the product.</p>
      <h2 class="content-heading1">Project Background</h2>
      <p>
        A medium-sized property management company wanted to build their own software to use internally and later offer
        to other property managing companies. At the start, the product idea was unclear, stakeholders were unsure about
        the direction, and there was no defined MVP scope. It was unclear where development should start.
      </p>

      <h2 class="content-heading1">Research and Understanding</h2>
      <p>
        I spoke with all key stakeholders and end users, including property owners, managers, accountants, and tax
        consultants.
        Through interviews and workshops, I identified the main user needs and uncovered the main problems with the
        existing software. This helped us set a clear product roadmap and decide what to include in the MVP.
      </p>
      <!-- TODO: Redo personas -->
      <!-- <StyledImage :src='buildURL("proptech/personas.png")' alt='Personas of the users' :rounded="true" :size="'md:max-w-5/10'" /> -->
      <!-- TODO: Translate and redo mvp scope -->
      <StyledImage :src='buildURL("proptech/mvp-scope.png")' alt='MVP Scope' :rounded="true" />

      <h2 class="content-heading1">Problems Found</h2>
      <p>
        The current software had poor navigation, limited reporting, and error-prone payment tracking. Users had to
        navigate long collapsible menus to access the property or contract they were looking for. It felt more like a
        digital data grave than a helpful tool.
        This caused frustration and inefficiency. Problems with payments or contracts surfaced too late, leading to
        financial losses and unhappy managers. I wanted to change that.
      </p>

      <h2 class="content-heading1">Design and Solution</h2>
      <p>I designed the structure of the software around the core workflows of the heavy users: accountants and property
        managers. They are dealing
        with a lot of properties, apartments and contracts daily and have to stay on top of everything.
        I created wireframes and iterated them in workshops with the stakeholders and end users. I tried to address the
        problems that made the old way of working so cumbersome.
      </p>
      <p>
        Instead of long treeviews that made navigation and orientation hard, I created an intelligent and fast search
        with the possibility to bookmark pages to come back to later.
      </p>
      <p>Previously, managers had to look through sub-pages of sub-pages to check if rents were paid on time. In my
        design I introduced an overview page with smart insights, so users would know if someone's rent was overdue.
      </p>
      <p>In the old software, content was illogically placed all over a page which made it hard to find relevant
        information. In my design I introduced a clear hierarchy with a sidebar menu and tabs to group relevant
        information together and make them easier to find.</p>

      
      <StyledImage :src='buildURL("proptech/wireframe-highlight.png")' alt='Wireframe of the overview page' :shadow="false"/>


      <h2 class="content-heading1">Brand and Visual Design</h2>
      <p>
        In my branding workshop the stakeholders defined the values of the new product which then determined the visual
        style. The product should feel modern and friendly, a knowledgeable companion to property managers. I created a
        logo, brand colors and chose a suitable typography. Based on this I designed a design system of core components
        in Figma. The design system drew heavily from the MUI component library with which it was developed after.
      </p>
      <StyledImage :src='buildURL("proptech/design-system.png")' alt='Design system for the web app' :shadow="false"
        :rounded="true" />

      <h2 class="content-heading1">Results and Next Steps</h2>
      <p>
        The MVP is in active development and will be rolled out internally. The stakeholders now have a clear view of
        the goals. This sets a solid base for future additions and selling the
        software to other property managing companies.
      </p>
      <StyledImage :src='buildURL("proptech/unit-sidebar.png")' alt='Final design of the property page' :rounded="true" />

      <h2 class="content-heading1">Website</h2>
      <p>For marketing purposes I designed and developed a website with Figma and Webflow. It explains what the product
        is offering and a form to sign up for a waiting list.
        I also added dark mode and some animations with GSAP to improve the experience.</p>
      <a class='link' href='https://n3xtup.de/'>Visit the website</a>
      <StyledImage :src='buildURL("proptech/website-idle-trim-xs.mp4")' alt='N3XTUP website in light mode'
        :rounded="true" />

    </div>
    <ProjectArrows :route='"/proptech"' />
  </div>
</template>

<script setup>
import ProjectHeader from '@/components/elements/ProjectHeader.vue'
import StyledImage from '@/components/elements/StyledImage.vue'
import ProjectArrows from '@/components/elements/ProjectArrows.vue'
import { buildURL } from '@/utils'
import Button from '@/components/elements/Button.vue'
</script>