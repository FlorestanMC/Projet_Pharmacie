<script setup>

import { Medicament } from "../medicament.js";
import { onMounted, ref, watch } from "vue";

const url = "https://apipharmacie.pecatte.fr/api/11/medicaments";
const searchurl = "https://apipharmacie.pecatte.fr/api/11/medicaments?search="

const props = defineProps(["recherche"]);

const listeMedicaments = ref([]);

function getMedicaments() {
    const fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON);

            for (let medicament of dataJSON) {
                listeMedicaments.value.push(new Medicament(medicament));
            }
            console.log(listeMedicaments);
        })
        .catch((error) => {
            console.log(error);
        });
}



function getSearchedMedicaments() {

    const fetchOptions = { method: "GET" };
    fetch(searchurl + props.recherche, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON);

            for (let medicament of dataJSON) {
                listeMedicaments.value.push(new Medicament(medicament));
            }
            console.log(listeMedicaments);
        })
        .catch((error) => {
            console.log(error);
        });


}

function clearMedicList(){
    
}

watch(props, (newrecherche) => {

    getSearchedMedicaments();

})

onMounted(() => {

    getMedicaments();

});

</script>

<template>

    <h2>Liste des Médicaments :</h2>

    <div id="med-container">
        <div v-for="medicament in listeMedicaments" :key="medicament.id" class="medicament-item">
            <p v-bind:value="medicament.id">{{ medicament.denomination }}</p>
        </div>
    </div>

</template>