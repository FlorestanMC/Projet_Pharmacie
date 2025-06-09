<script setup>
import Medicaments from "@/components/MainComponents/Medicaments.vue";
import Header from "@/components/TopComponents/Header.vue";
import AccueilPres from "@/components/TopComponents/AccueilPres.vue";
import { ref, onMounted } from "vue";

const motcle = ref("");
const reinitialiserRecherche = ref(false);

function reinitialiserMrecherche() {
    reinitialiserRecherche.value = true;
}

function DefinirProps(r) {


    motcle.value = r;

}


onMounted(() => {
    localStorage.setItem('admin_auth', 'non authentifié');
});

</script>
<template>
    
    <div id="top">
        <Header @recherche="DefinirProps" :reinitialiserRecherche="reinitialiserRecherche"  />
        <AccueilPres />
    </div>
    <main>
        <Medicaments :recherche="motcle" @reinitialiserRecherche="reinitialiserMrecherche"/>
    </main>
</template>

<style scoped>
main {
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    padding-inline: 20%;
}
</style>
