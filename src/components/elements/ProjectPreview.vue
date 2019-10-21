<template>
    <router-link class='tile responsive' :to='projProps.route'>
        <div class='preview-image'>
            <img :src='buildImgUrl(projProps.image.src)' :alt='projProps.image.alt' />
        </div>
        <div class='preview-text'>
            <div class='heading'>{{ projProps.name }}</div>
            <div class='slogan'>{{ projProps.slogan}}</div>
            <div class='info'>
                <span class='heading'>Client</span>
                <span class='heading'>Task</span>
                <span class='heading'>Timeline</span>
                <span class='text'>{{ projProps.client }}</span>
                <span class='text'>{{ projProps.task }}</span>
                <span class='text'>{{ projProps.date }}</span>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        projProps: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
        }
    },
    methods: {
        buildImgUrl(src) {
            return require('../../assets/' + src)
        }
    }
}
</script>

<style scoped>
.tile {
  display: block;
}

.preview-image img {
    max-width: 100%;
}

.heading {
    font-size: 18px;
    font-weight: bold;
    color: var(--light);
}

.slogan {
    font-size: 48px;
    color: var(--dark);
}

.text {
    font-size: 20px;
    color: var(--dark);
}

.info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 24px;
}

@media screen and (max-width: 768px) {
    .preview-text {
        padding-top: 24px;
        display: block;
    }

    .slogan {
        font-size: 36px;
        margin-bottom: 18px;
    }

    .tile {
        margin: 100px 0;
    }

    .heading {
        font-size: 16px;
    }

    .text {
        font-size: 18px;
    }
}

@media screen and (min-width: 768px) {
    .tile {
        margin-top: 150px;
        margin-bottom: 150px;
        display: grid;
        grid-template-columns: 4fr 48px 5fr;
    }

    .preview-image {
        grid-column: 1 / span 1;
    }

    .preview-text{
        grid-column: 3 / span 1;
    }

    .slogan {
        margin-bottom: 50px;
    }
}
</style>
