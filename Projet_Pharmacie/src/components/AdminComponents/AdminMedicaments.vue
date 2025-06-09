<script setup>
import AdminListeMedicaments from "./AdminListeMedicaments.vue"

const props = defineProps(["recherche"]);

</script>

<template>
    <AdminListeMedicaments :recherche="props.recherche" />
</template>