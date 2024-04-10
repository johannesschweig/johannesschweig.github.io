<template>
  <div class="wrapper">
    <div class='responsive'>
      <h4>Believes</h4>
      <div class="grid">
        <div class="tile">
          <AgileIcon />
          <h5>Agile Excellence</h5>
          <p>In software projects, uncertainty is inevitable, and priorities often shift. It's the ability to adapt to
            these
            changes that makes good products great.</p>
        </div>
        <div class="tile">
          <TeamsIcon />
          <h5>Empowered Teams</h5>
          <p>Collaboration between business and development is essential to crafting software that not only adds value
            but
            is also technologically feasible.</p>
        </div>
        <div class="tile">
          <TelescopeIcon />
          <h5>Strong product vision</h5>
          <p>Software excels when it focuses on doing one thing exceptionally well. A strong product vision prioritizes
            excellence over unnecessary complexities.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { buildURL } from '@/utils'
import Icon from '@/components/elements/Icon.vue'
import AgileIcon from '@/assets/landingpage/agile.svg'
import TeamsIcon from '@/assets/landingpage/teams.svg'
import TelescopeIcon from '@/assets/landingpage/telescope.svg'


export default {
  components: {
    AgileIcon,
    Icon,
    TeamsIcon,
    TelescopeIcon,
  },
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>

<style scoped>
h4 {
  color: white;
  margin-bottom: 24px;
  margin-top: 0px;
}

h5 {
  margin: auto 0;
}

p {
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.wrapper {
  background-color: var(--dark);
  padding-top: 48px;
  padding-bottom: 72px;
}

.tile {
  border-radius: var(--radius);
  background-color: white;
  padding: 24px;
  display: grid;
  grid-template-rows: 2fr 1fr 2fr; 
}

.tile svg {
  margin: auto;
}

@media screen and (max-width: 768px) {
  .wrapper {
    padding-top: 32px;
    padding-bottom: 64px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

}
</style>