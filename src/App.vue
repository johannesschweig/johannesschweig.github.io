<template>
    <div id="app">
        <app-header></app-header>
        <div id="content">
            <router-view/>
        </div>
        <router-link to='/legal' id='legal'>Legal / Impressum</router-link>
    </div>
</template>

<script>
import Header from './components/elements/Header.vue'

export default {
    name: 'App',
    components: {
        'app-header': Header
    }
}
</script>

<style>
:root {
	--font: "Lato", sans-serif;
    --content-padding: 30px;
	--dark: #212121;
	--light: #666666;
}

body {
	font-family: var(--font);
	font-weight: 500;
    color: var(--dark);
    margin: 0;
}

a {
    text-decoration: none;
	color: var(--light);
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


/* responsive content*/
.responsive {
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
    max-width: 1200px;
    margin: 0 auto;
}

#legal {
    font-size: 16px;
    text-decoration: unerline;
    padding: 4px;
    display: block;
    text-align: right;
    border-width: 1px 0 0 0;
    border-style: solid;
    border-color: #ccc;
}
</style>
