<script setup>
import Header from '@/components/TopComponents/Header.vue';
import AdminMedicaments from '@/components/AdminComponents/AdminMedicaments.vue';
import AdminPres from '@/components/AdminComponents/AdminPres.vue';
import { ref } from "vue";

const motcle = ref("");
const reinitialiserRecherche = ref(false);

function reinitialiserMrecherche() {
    reinitialiserRecherche.value = true;
}

function DefinirProps(r) {


    motcle.value = r;

}
</script>
<template>
    <div id="top">
        <Header @recherche="DefinirProps" :reinitialiserRecherche="reinitialiserRecherche" />
        <AdminPres/>
    </div>
    <main>
        <AdminMedicaments :recherche="motcle" @reinitialiserRecherche="reinitialiserMrecherche" />
    </main>
</template>
<style scoped></style>