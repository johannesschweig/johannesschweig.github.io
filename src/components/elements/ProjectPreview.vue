<template>
    <router-link
      class='tile'
      :to='projProps.route'>
        <div class='img-container'>
          <img :src='buildURL(projProps.image.src)' :alt='projProps.image.alt' />
        </div>
        <div class='text'>
          <div class='h5sans'>{{ projProps.slogan}}</div>
          <div class='body1'>{{ projProps.task }}</div>
        </div>
    </router-link>
</template>

<script>
import { buildURL } from '@/utils';

export default {
    props: {
        projProps: {
            type: Object,
            required: true
        }
    },
    methods: {
        buildURL(src) {
          return buildURL(src)
        }
    }
}
</script>

<style scoped>
.tile {
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  --anim-dur: .1s;
  -webkit-transition: var(--anim-dur) ease;
  -moz-transition: var(--anim-dur) ease;
  -o-transition: var(--anim-dur) ease;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.tile:hover {
  transform: scale(1.03);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.img-container {
  display: inline-block;
  position: relative;
  width: 100%;
}

/* ensures 16:10 ratio of cover images */
.img-container:after {
  padding-top: 62.5%;
  display: block;
  content: '';
}

img {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width:100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius) var(--radius) 0px 0px;
}

.text {
  margin: 24px 24px 48px 24px;
}

.h5sans {
  margin-bottom: 12px;
}

.text > .body1 {
  color: var(--blue);
  padding: 4px 8px;
  border-radius: var(--radius);
  border: 1px solid var(--blue);
  display: inline-block;
}


@media screen and (max-width: 768px) {
  .h5sans {
    font-size: var(--size-h6);
  }

  .text > .body1 {
    font-size: var(--size-sub2);
  }
}
</style>
