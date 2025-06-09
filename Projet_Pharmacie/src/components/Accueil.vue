<script setup>

import Medicaments from "./Medicaments.vue";
import Header from "./Header.vue";
import Presentation from "./Presentation.vue";
import { ref, onMounted} from "vue";

const motcle = ref("");

function DefinirProps(r) {


    motcle.value = r;

}

onMounted(() => {

    localStorage.setItem('admin_auth', 'non authentifié');
});

</script>
<template>
    <Header @recherche="DefinirProps" />
    <Presentation />
    <main>
        <Medicaments :recherche="motcle" />
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
