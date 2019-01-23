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
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: {
        'app-header': Header
    }
}
</script>

<style>
:root{
	--font: "Lato", sans-serif;
    --content-padding: 30px;
	--dark: #212121;
	--light: #666666;
}

body{
	font-family: var(--font);
	font-weight: 500;
    color: var(--dark);
    margin: 0;
}

a {
    text-decoration: none;
	color: var(--light);
}

p {
    font-size: 18px;
    line-height: 28px;
}

ul {
    font-size: 18px;
    margin: 0 0 24px 0;
}

ul li {
    line-height: 28px;
}


/* responsive content*/
.responsive {
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
}

@media screen and (min-width: 1366px) {
    .responsive {
        padding-left: 12%;
        padding-right: 12%;
    }
}

@media screen and (min-width: 1680px) {
    .responsive {
        padding-left: 15%;
        padding-right: 15%;
    }
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
