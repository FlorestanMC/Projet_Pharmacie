<script setup>

import { Medicament } from "../medicament.js";
import { onMounted, ref, watch } from "vue";

const url = "https://apipharmacie.pecatte.fr/api/11/medicaments";

const search = "?search="

const props = defineProps(["recherche"]);

const listeMedicaments = ref([]);

function getMedicaments() {
    const fetchOptions = { method: "GET" };
    fetch(props.recherche == '' ? url : url + search + props.recherche, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON);
            listeMedicaments.value = []
            for (let medicament of dataJSON) {
                listeMedicaments.value.push(new Medicament(medicament));
            }
            console.log(listeMedicaments);
        })
        .catch((error) => {
            console.log(error);
        });
}

watch(props, (newrecherche) => {
    console.log("meow")
    getMedicaments(props);
    
})

onMounted(() => {

    getMedicaments();

});

</script>

<template>

    <h2>Liste des Médicaments :</h2>

    <div id="med-container">
        <div class="titre">
            <div class="med-titre" style="width: 150px;">
                <p>Dénomination</p>
            </div>
            <div class="med-titre" style="width: 100px;">
                <p>Quantité</p>
            </div>
            <div class="med-titre" style="width: 100px;">
                <p>Forme</p>
            </div>
        </div>

        <div v-for="medicament in listeMedicaments" :key="medicament.id" class="med-item">
            <div class="band"></div>
            <div class="med-info" style="width: 150px;">
                <p v-bind:value="medicament.id">{{ medicament.denomination }}</p>
            </div>
            <div class="med-info" style="width: 100px;">
                <p v-bind:value="medicament.id">{{ medicament.quantite }}</p>
            </div>
            <div class="med-info" style="width: 100px;">
                <p v-bind:value="medicament.id">{{ medicament.formepharmaceutique }}</p>
            </div>

        </div>
    </div>


</template>

<style scoped>

.titre {
    display: flex;
    vertical-align: center;
}
.med-titre {
    margin-block: 4px;
    margin-right: 4px;
    padding-inline: 1%;
    text-align: center;
    font-weight:500;
}
.med-item {
    display: flex;
    flex-direction: row;
    margin-block: 4px;
}

.med-info {
    padding: 1%;
    margin-right: 4px;
    background-color: rgb(226, 226, 226);
}

p {
    padding: 0;
    margin: 0;
    text-align: center;
   
}

.band {
    width: 4px;
    background-color: rgb(115, 233, 99);
}
</style>