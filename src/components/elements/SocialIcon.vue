<template>
  <img :src='getSrcImg' />
</template>

<script>
  export default {
    props: {
      img: {
        type: String,
        required: true
      },
    },
    computed: {
      getSrcImg() {
        return require(`../../assets/bio/${this.img}.svg`)
      }
    }
  }
</script>

<style scoped>
img {
  margin-right: 18px;
  cursor: pointer;
  width: 48px;
  opacity: .6;
}

img:hover {
  opacity: .87;
}
</style>
