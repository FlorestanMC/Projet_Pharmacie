<script setup>
import ListeMedicaments from "../components/ListeMedicaments.vue";
const props = defineProps(["recherche"]);
</script>

<template>
    <ListeMedicaments :recherche="props.recherche" />
</template>