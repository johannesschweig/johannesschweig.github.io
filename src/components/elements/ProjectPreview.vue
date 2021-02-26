<template>
    <router-link class='tile' :to='projProps.route'>
        <div class='img-container'>
          <img :src='buildImgUrl(projProps.image.src)' :alt='projProps.image.alt' />
        </div>
        <div class='title'>
          <div class='slogan'>{{ projProps.slogan}}</div>
          <div class='task'>{{ projProps.task }}</div>
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
    methods: {
        buildImgUrl(src) {
            return require('../../assets/' + src)
        }
    }
}
</script>

<style scoped>
.tile {
  background-color: white;
  border-radius: var(--radius);
  display: block;
  box-shadow: var(--shadow);
  --anim-dur: .1s;
  -webkit-transition: var(--anim-dur) ease;
  -moz-transition: var(--anim-dur) ease;
  -o-transition: var(--anim-dur) ease;
  /* transition: var(--anim-dur) ease; */
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.tile:hover {
  /* transform: translateY(-20px); */
  transform: scale(1.03);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

img {
  width: 100%;
  object-fit: contain;
  border-radius: var(--radius) var(--radius) 0px 0px;
}

.img-container {
  /* width: 100vw; */
  /* height: 56.25vw; */
}

.title {
  margin: 24px;
}

.slogan {
  font-size: 20px;
  color: var(--dark);
  margin-bottom: 12px;
}

.task {
  color: var(--blue);
  font-size: 14px;
  padding: 4px;
  border-radius: var(--radius);
  border: 1px solid var(--blue);
  display: inline-block;
}

</style>
