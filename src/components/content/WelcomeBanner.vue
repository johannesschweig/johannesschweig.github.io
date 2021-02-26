<template>
  <div id='welcome'>
      <div>
        Hi,
      </div>
      <div>
        I am Johannes, a UX Designer based in Berlin, and this is my work.
      </div>
  </div>
</template>

<style scoped>
#welcome{
  font-family: var(--font-serif);
  padding-top: 48px;
  padding-bottom: 72px;
  font-size: 48px;
}

#welcome > div:first-child {
  padding-bottom: 20px;
}

@media screen and (max-width: 768px) {
  #welcome {
    font-size: 36px;
    padding-top: 32px;
    padding-bottom: 50px;
  }

  #welcome > div:first-child {
    padding-bottom: 12px;
  }
}
</style>