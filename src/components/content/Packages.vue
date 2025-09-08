<template>
  <div class="responsive mb-16"> 
    <h2 class="text-3xl font-medium mt-10 mb-8">My offers</h2>
    <div class="general-grid">
      <div class="bg-light-100 rounded-2xl border border-light-200 p-8 grid gap-3 grid-rows-[48px_12px_1fr_12px_40px] items-center">
        <h3 class="text-2xl">MVP Accelerator</h3>
        <div class="h-px bg-light-200"></div>
        <ul>
          <li>Kick-off Workshop (on-site)</li>
          <li>Clear scope of the core user journey</li>
          <li>Low-fidelity wireframes</li>
          <li>High-fidelity designs of the core flow</li>
          <li>Basic design system (colors, typography, components)</li>
          <li class="calendar">Timeline: 1 – 2 months</li>
        </ul>
        <div class="h-px bg-light-200"></div>
        <div>
          <div class="text-xl">4 000€ – 8 000€</div>
          <div class='text-dark-300 text-sm'>Depending on scope</div>
        </div>
      </div>
      <div class="bg-light-100 rounded-2xl border border-light-200 p-8 grid gap-3 grid-rows-[48px_12px_1fr_12px_40px] items-center">
        <h3 class="text-2xl">UX for agile teams</h3>
        <div class="h-px bg-light-200"></div>
        <ul>
          <li>Interviewing users and documenting pain points</li>
          <li>Interaction design for new features</li>
          <li>Preparing user stories for refinement</li>
          <li>Supporting developers in the development process</li>
          <li class="stopwatch">Part-time or full-time</li>
        </ul>
        <div class="h-px bg-light-200"></div>
        <div class="text-xl">90€/h</div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/elements/Tag.vue';

export default {
  components: {
    Tag,
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  align-self: start;
}

li {
  padding-left: 1ch;
  margin-bottom: 8px;
  list-style-type: none;
}

li::before {
  opacity: .7;
  content: '';
  vertical-align: text-bottom;
  display: inline-block;
  height: 20px;
  width: 20px;
  background-size: contain;
  background-image: url("../../assets/landingpage/checkmark.svg");
  margin-right: 5px;
}

li.calendar::before {
  background-image: url("../../assets/landingpage/calendar.svg");
}

li.stopwatch::before {
  background-image: url("../../assets/landingpage/stopwatch.svg");
}
</style>