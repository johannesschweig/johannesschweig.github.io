<template>
  <Header />
  <div id="content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/elements/Header.vue'
import Footer from '@/components/elements/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
@import './styles.css';
</style>
