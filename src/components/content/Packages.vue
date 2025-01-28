<template>
  <div class="responsive">
    <h4>My offers</h4>
    <div class="grid">
      <div class="card">
        <div class="h5 title">MVP</div>
        <div class="divider"></div>
        <p>MVPs cost at 1000€ to 4000€</p>
        <div class="divider"></div>
        <p>
          <div class="h5">1 000€ – 4 000€</div>
          <div class='subtitle2'>Depending on scope</div>
        </p>
      </div>
      <div class="card">
        <div class="h5">Custom UX Design in your team</div>
        <p>I do ux design in your team. Starting at 80€/h.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.responsive {
  margin-bottom: 64px;
}

h4 {
  margin-bottom: 32px;
}

.card {
  /* border-radius: var(--radius-2); */
  /* border: 1px solid var(--blue-100); */
  background-color: var(--light-100);
  border-radius: var(--radius-2);
  border: 1px solid var(--light-200);
  padding: 32px;
  gap: 24px;
}


p {
  color: var(--dark-200);
}

.divider {
  background-color: var(--light-200);
  height: 1px;
}

.h5.title {
  margin-bottom: 24px;
}

.subtitle2 {
  color: var(--dark-300)
}
</style>