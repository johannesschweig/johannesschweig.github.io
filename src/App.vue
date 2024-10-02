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

.background {
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-grow: 1;
    z-index: -1;
    background: var(--light-100);
}

.background div {
    position: absolute;
    border-radius: 100%;
    height: 0;
    filter: blur(8vw);
    opacity: 0.2;
}

.background div:nth-child(1) {
    background: linear-gradient(132deg, var(--blue-400) 0.00%, #f5834d 100.00%);
    width: 80%;
    padding-top: 80%;
    left: 64%;
    top: 52%;
    transform: translateX(-50%) translateY(-50%);
}

</style>
