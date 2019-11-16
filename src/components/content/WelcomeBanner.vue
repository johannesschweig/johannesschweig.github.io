<template>
  <div id='welcome'>
    <div class='responsive'>
      <div> Hi,</div>
      <div>I am Johannes, a UX Designer based in Berlin, and this is my work.</div>
    </div>
  </div>
</template>

<style scoped>
#welcome{
  color: var(--dark);
  padding-bottom: 72px;
  background-image: url('../../assets/pattern.png');
  background-position: -150px bottom;
  background-repeat: repeat;
}

#welcome > div{
  padding-top: 32px;
  font-size: 48px;
}

#welcome div div:nth-child(1) {
  padding-bottom: 24px;
}

@media screen and (max-width: 768px) {
  #welcome > div {
    padding-top: calc(50px + 18px);
    font-size: 36px;
  }

  #welcome div div:nth-child(1) {
    padding-bottom: 18px;
  }
}
</style>