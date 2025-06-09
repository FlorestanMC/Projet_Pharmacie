<script setup>
import ListeMedicaments from './ListeMedicaments.vue';

const emit = defineEmits(['reinitialiserRecherche']);
const props = defineProps(["recherche"]);

</script>

<template>
    <ListeMedicaments :recherche="props.recherche"  @reinitialiserRecherche="$emit('reinitialiserRecherche')" />
</template>