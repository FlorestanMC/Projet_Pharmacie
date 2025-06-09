<script setup>
import { Medicament } from "../medicament.js";
import { onMounted, onBeforeUnmount, ref, watch } from "vue";

const url = "https://apipharmacie.pecatte.fr/api/11/medicaments";

const search = "?search="

const props = defineProps(["recherche"]);

const photourl = "https://apipharmacie.pecatte.fr/images/";

const listeMedicaments = ref([]);

const showBackToTop = ref(false);

function getMedicaments() {
    const fetchOptions = { method: "GET" };
    fetch(props.recherche == '' ? url : url + search + props.recherche, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            listeMedicaments.value = []
            for (let medicament of dataJSON) {
                listeMedicaments.value.push(new Medicament(medicament));
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function checkScroll() {
    showBackToTop.value = window.scrollY > 50;
}

function scrollAuTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

watch(props, (newrecherche) => {
    getMedicaments(props);
    document.querySelector('#med-container').scrollIntoView({
        behavior: 'smooth'
    });
})

onMounted(() => {

    getMedicaments();
    window.addEventListener('scroll', checkScroll);

});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll);
});

</script>

<template>

    <h2>Liste des médicaments répertoriés :</h2>

    <div id="med-container">
        <div class="titre">
            <div class="med-titre" style="width: 200px;">
                <p>Dénomination</p>
            </div>
            <div class="med-titre" style="width: 200px;">
                <p>Quantité</p>
            </div>
            <div class="med-titre" style="width: 200px;">
                <p>Forme</p>
            </div>
            <div class="med-titre" style="width: 200px;">
                <p>Image</p>
            </div>
        </div>

        <div v-for="medicament in listeMedicaments" :key="medicament.id" class="med-item">
            <div class="band"></div>
            <div class="med-infost" style="width: 200px;">
                <p v-bind:value="medicament.id">{{ medicament.denomination }}</p>
            </div>
            <div class="med-info" style="width: 200px;">
                <p v-bind:value="medicament.id">{{ medicament.quantite }}</p>
            </div>
            <div class="med-info" style="width: 200px;">
                <p v-bind:value="medicament.id">{{ medicament.formepharmaceutique }}</p>
            </div>
            <div class="med-info" style="width: 200px;">
                <img class="med-img" v-bind:src="photourl + medicament.photo">
            </div>
        </div>
    </div>

<button v-show="showBackToTop" @click="scrollAuTop" class="back-to-top" aria-label="Revenir en haut"> ▲ </button>

</template>

<style scoped>

.back-to-top {
    position: fixed;
    right: 32px;
    bottom: 32px;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    background: #3498db;
    color: white;
    font-size: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    opacity: 0.8;
    z-index: 1000;
    transition: opacity 0.2s;
}

.back-to-top:hover {
    opacity: 1;
    background: #217dbb;
}

.titre {
    display: flex;
    vertical-align: center;
    justify-content: center;
}

.med-img {
    object-fit: cover;
    width: 200px;
    max-height: 200px;

}

.med-titre {
    margin-block: 4px;
    margin-right: 4px;
    padding-inline: 1%;
    text-align: center;
    font-weight: initial;
    font-style: italic;



}

.med-item {
    display: flex;
    flex-direction: row;
    margin-block: 4px;
    justify-content: center;

}

.med-info {
    padding: 1%;
    margin-right: 4px;
    background-color: rgb(240, 238, 238);
    border-radius: 5px;
    align-items: center;
    display: flex;
    justify-content: center;
}

.med-infost {
    padding: 1%;
    margin-right: 4px;
    background-color: rgb(240, 238, 238);
    border-radius: 0px 5px 5px 0px;
    align-items: center;
    display: flex;
    justify-content: center;
}

p {
    padding: 0;
    margin: 0;
    text-align: center;

}

.band {
    width: 4px;
    background-color: lightcyan;
    border-radius: 15px 0px 0px 15px;
}

h2 {
    display: flex;
    justify-content: center;
}
</style>