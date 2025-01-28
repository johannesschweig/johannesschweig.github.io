<template>
  <div class='text'>
    {{ collapsed && text.length > limit ? text.slice(0, limit).trim() + "..." : text }}
    <span v-if='text.length > limit' class="subtitle2" @click="toggleExpand">
      {{ collapsed ? "More" : "Less" }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
    }
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    }
  },
  methods: {
    toggleExpand() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style scoped>
.text {
  line-height: 28px;
}

span {
  color: var(--blue-300);
  transition: all .1s ease;
}
span:hover,
span:active {
  color: var(--blue-400);
  cursor: pointer;
}
</style>