<script setup>
import Medicaments from "./components/Medicaments.vue";
import Header from "./components/Header.vue";
import Presentation from "./components/Presentation.vue";
import { ref } from "vue";

const motcle = ref("");

function DefinirProps(r) {


  motcle.value = r;

}

</script>

<template>
  <Header @recherche="DefinirProps" />
  <Presentation/>
  <main>
    <Medicaments :recherche="motcle" />
  </main>

</template>

<style scoped></style>
