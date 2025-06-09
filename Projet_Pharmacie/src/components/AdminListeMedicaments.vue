<script setup>
import { Medicament } from "../medicament.js";
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import ModaleModifier from "./ModaleModifier.vue";

const url = "https://apipharmacie.pecatte.fr/api/11/medicaments";

const search = "?search="

const props = defineProps(["recherche"]);

const photourl = "https://apipharmacie.pecatte.fr/images/";

const listeMedicaments = ref([]);

const montreModale = ref(false);

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

function postMedicaments(medicament) {
    const fetchOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicament)
    };
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log("Erreur lors de l'ajout du médicament : ", error);
        });
}

function putMedicaments(medicament) {
    const fetchOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicament)
    };
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log("Erreur lors de l'ajout du médicament : ", error);
        });
}

function deleteMedicament(id) {
    const fetchOptions = { method: "DELETE" };
    fetch(url + "/" + id, fetchOptions)
        .then((response) => {
            window.alert("Le médicament a bien été supprimé !");
            location.reload();
            return response.json();

        })
        .catch((error) => {
            console.log('Erreur lors de la suppression du médicament : ', error);
        });
}

function ModaleOn() {
    montreModale.value = true
}

function rechargePage() {

    montreModale.value = false;
    location.reload();
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

    <h2>Liste des Médicaments ~ Admin Mode :</h2>

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
            <div class="med-titre" style="width: 100px;">
                <p>Image</p>
            </div>
            <div class="med-titre" style="width: 100px;">
                <p>Action</p>
            </div>
        </div>

        <div v-for="medicament in listeMedicaments" :key="medicament.id" class="med-item">
            <div class="band"></div>
            <div class="med-infost" style="width: 150px;">
                <p v-bind:value="medicament.id">{{ medicament.denomination }}</p>
            </div>
            <div class="med-info" style="width: 100px;">
                <p v-bind:value="medicament.id">{{ medicament.formepharmaceutique }}</p>
            </div>
            <div class="med-info" style="width: 100px;">
                <img class="med-img" v-bind:src="photourl + medicament.photo">
            </div>
            <div class="med-info" style="width: 100px;">
                <p v-bind:value="medicament.id">{{ medicament.quantite }}</p>
            </div>
            <div class="med-info" style="width: 100px;">
                <div class="gstock">
                    <input class="inputplus" type="button" value="+" />
                    <input class="inputmoins" type="button" value="-" />
                </div>
                <div class="gmodsupp">
                    <input @click="ModaleOn" class="actionbtn" type="button" value="Modifier" />
                    <input class="actionbtn" @click="deleteMedicament(medicament.id)" type="button" value="Supprimer" />
                </div>

            </div>
        </div>
    </div>

    <ModaleModifier :ModModOn="montreModale" @succes="rechargePage" @fermer="montreModale = false" />
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

.actionbtn {
    margin: 5px 5px 0px 5px;
    padding: 3px;
    color: white;
    background-color: #031927;
    border-radius: 4px;
    border-color: #031927;
    font-weight: normal;
    font-family: Poppins;
    border: 0px;
    cursor: pointer;
}




.actionbtn:hover {
    border: #031927 1px solid;
    background-color: #e1edfd;
    color: #031927;
}

.gstock {
    display: flex;
    width: 100%;
    justify-content: space-around;

}

.inputplus {
    background-color: #55c49c;
    border: 0px;
    border-radius: 2px;
    font-weight: 600;
    font-family: Poppins;
    cursor: pointer;

}

.inputplus:hover {

    border: #031927 1px solid;
    background-color: rgba(162, 255, 222, 0.349);
}

.inputmoins:hover {
    border: #031927 1px solid;
    background-color: #fe494941;
}

.inputmoins {
    background-color: #FE4A49;
    border: 0px;
    border-radius: 2px;
    font-weight: 600;
    font-family: Poppins;
    cursor: pointer;

}

.gmodsupp {
    display: flex;
    flex-direction: column;

}

.titre {
    display: flex;
    vertical-align: center;
    justify-content: center;
}

.med-img {
    object-fit: contain;
    width: 70px;

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
    flex-direction: column;
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