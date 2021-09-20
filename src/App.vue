<template>
    <div id="app">
      <Header />
      <div id="content">
        <router-view/>
      </div>
      <Footer />
    </div>
</template>

<script>
import Header from './components/elements/Header.vue'
import Footer from './components/elements/Footer'

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
