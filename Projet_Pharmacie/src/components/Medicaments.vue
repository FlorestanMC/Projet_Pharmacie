<script setup>

import ListeMedicaments from "../components/ListeMedicaments.vue";
import FormRecherche from "../components/FormRecherche.vue";
import { ref } from "vue";

const props = defineProps(["recherche"]);
const motcle = ref("");

function DefinirProps(r) {

    motcle.value = r;

}
</script>

<template>

    <FormRecherche @recherche="DefinirProps" />
    <ListeMedicaments :recherche="motcle" />

</template>