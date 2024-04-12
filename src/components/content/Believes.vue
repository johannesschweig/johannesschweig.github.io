<template>
  <div class="wrapper">
    <div class='responsive'>
      <div class="grid">
        <div class="tile">
          <AgileIcon />
          <div class="h5">Agile Excellence</div>
          <div class="body1">In software projects, uncertainty is inevitable, and priorities often shift. It's the
            ability to adapt to these changes that makes good products great.</div>
        </div>
        <div class="tile">
          <TeamsIcon />
          <div class="h5">Empowered Teams</div>
          <div class="body1">Collaboration between business and development is essential to crafting software that not
            only adds value but is also technologically feasible.</div>
        </div>
        <div class="tile">
          <TelescopeIcon />
          <div class="h5">Strong product vision</div>
          <div class="body1">Software excels when it focuses on doing one thing exceptionally well. A strong product
            vision prioritizes excellence over unnecessary complexities.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { buildURL } from '@/utils'
import AgileIcon from '@/assets/landingpage/agile.svg'
import TeamsIcon from '@/assets/landingpage/teams.svg'
import TelescopeIcon from '@/assets/landingpage/telescope.svg'


export default {
  components: {
    AgileIcon,
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
.h5 {
  color: white;
  margin: auto 0;
}

.body1 {
  color: var(--light-200);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.wrapper {
  background-color: var(--dark-100);
  padding-top: 48px;
  padding-bottom: 72px;
  fill: white;
}

.tile {
  padding: 24px;
  display: grid;
  grid-template-rows: 2fr 1fr 2fr;
}

.tile svg {
  margin: auto 0;
}

@media screen and (max-width: 768px) {
  .tile {
    grid-template-rows: auto;
    gap: 16px;
  }

  .wrapper {
    padding-top: 32px;
    padding-bottom: 64px;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 0;
  }

}
</style>