<script setup>
import Medicaments from "./components/Medicaments.vue"
</script>

<template>
  <header>
    <img alt="Logo Pharmacie ISIS" class="logo" src="./assets/logo.png" width="250" height="250" />

   
  </header>
  <main>
    <Medicaments />
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
