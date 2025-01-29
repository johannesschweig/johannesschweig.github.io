<template>
  <div class="responsive">
    <h4>My offers</h4>
    <div class="grid">
      <div class="card">
        <div class="h5 title">MVP Accelerator</div>
        <div class="divider"></div>
        <ul>
          <li>Kick-off Workshop (on-site)</li>
          <li>Clear scope of the core user journey</li>
          <li>Low-fidelity wireframes</li>
          <li>High-fidelity designs of the core flow</li>
          <li>Basic design system (colors, typography, components)</li>
          <li class="calendar">Timeline: 1 – 2 months</li>
        </ul>
        <div class="divider"></div>
        <div>
          <div class="h6">1 000€ – 4 000€</div>
          <div class='subtitle2'>Depending on scope</div>
        </div>
      </div>
      <div class="card">
        <div class="h5 title">UX for agile teams</div>
        <div class="divider"></div>
        <ul>
          <li>Interviewing users and documenting pain points</li>
          <li>Interaction design for new features</li>
          <li>Preparing user stories for refinement</li>
          <li>Supporting developers in the development process</li>
          <li class="stopwatch">Part-time or full-time</li>
        </ul>
        <div class="divider"></div>
        <div class="h6">80€/h</div>
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
.responsive {
  margin-bottom: 64px;
}

h4 {
  margin-bottom: 32px;
}

.card {
  background-color: var(--light-100);
  border-radius: var(--radius-2);
  border: 1px solid var(--light-200);
  padding: 32px;
  gap: 12px;
  display: grid;
  grid-template-rows: 48px 12px 1fr 12px 40px;
  align-items: center;
}


p {
  color: var(--dark-200);
}

.divider {
  background-color: var(--light-200);
  height: 1px;
}

.subtitle2 {
  color: var(--dark-300);
}

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