<script setup>

const Mrecherche = "";

</script>


<template>
    <form @submit.prevent="$emit('recherche', Mrecherche)">
        <input type="text" v-model="Mrecherche" placeholder="Rechercher un médicament" />
        <input type="submit" value="valider" />
    </form>
</template>