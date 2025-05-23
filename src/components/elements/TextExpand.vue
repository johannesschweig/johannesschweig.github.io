<template>
  <div class='text-white leading-7'>
    {{ collapsed && text.length > limit ? text.slice(0, limit).trim() + "..." : text }}
    <span v-if='text.length > limit' class="text-blue-300 text-sm hover:text-blue-400 active:text-blue-400 cursor-pointer transition-all duration-100 ease-in-out" @click="toggleExpand">
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