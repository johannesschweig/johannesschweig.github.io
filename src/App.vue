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
import Footer from './components/content/Footer'

export default {
    name: 'App',
    components: {
      Footer,
      Header
    }
}
</script>

<style>
:root {
	--font-sans: "Lato", sans-serif;
	--font-serif: "Lora", serif;
  --content-padding: 30px;
	--dark: #212121;
	--light: #666666;
  --blue: #355DAE;
  --light-blue: #E6ECF2;
  --shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  --grad: linear-gradient(180deg, var(--light-blue) 0%, #EBF2F2 100%);
  --radius: 2px;
}

body {
	font-family: var(--font-sans);
	font-weight: 500;
  color: var(--dark);
  margin: 0;
  height: 100%;
  background: var(--grad);
}

#app {
  display: grid;
  grid-template-rows: 64px 1fr auto;
  height: 100%;
}

a {
  text-decoration: none;
  color: var(--dark);
}

p, ul, ol {
    max-width: 700px;
    font-size: 18px;
}

p {
    line-height: 28px;
}

ul {
    margin: 0 0 24px 0;
}

ul li, ol li {
    line-height: 28px;
}

/* custom classes */
.link {
  border-bottom: 2px solid rgba(53, 93, 174, 0.5);
}

.link:hover {
  border-bottom: 2px solid var(--blue);
}

/* responsive content*/
.responsive {
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
    max-width: 1200px;
    margin: 0 auto;
}
</style>
