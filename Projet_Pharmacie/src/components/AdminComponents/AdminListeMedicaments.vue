<script setup>
import { Medicament } from "../../medicament.js";
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import ModaleModifier from "../AdminComponents/ModaleModifier.vue"
import ModaleAjouter from "./ModaleAjouter.vue";


const url = "https://apipharmacie.pecatte.fr/api/11/medicaments";

const search = "?search="

const props = defineProps(["recherche", "reinitialiserRecherche"]);

const emit = defineEmits(['reinitialiserRecherche']);

const photourl = "https://apipharmacie.pecatte.fr/images/";

const listeMedicaments = ref([]);

const montreModaleAjout = ref(false);

const montreModaleModif = ref(false);

const BackToTop = ref(false);

const medicamentactuel = ref();

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
    let newmedicament = { id: medicament._id, denomination: medicament._denomination, formepharmaceutique: medicament._formepharmaceutique, photo: medicament._photo, qte: medicament._qte }
    if (medicament._qte < 0) {
        newmedicament.qte = 1;
    }
    const fetchOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newmedicament)
    };
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then(() => {
            getMedicaments();
        })
        .catch((error) => {
            console.log("Erreur lors de l'ajout du médicament : ", error);
        });
}

function putMedicaments(medicament) {
    console.log(medicament)
    let newmedicament = { id: medicament._id, denomination: medicament._denomination, formepharmaceutique: medicament._formepharmaceutique, qte: medicament._qte }
    if (medicament._qte < 0) {
        newmedicament.qte = 1;
    }
    const fetchOptions = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newmedicament)
    };

    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then(() => {
            getMedicaments();
        })
        .catch((error) => {
            console.log("Erreur lors de la modification du médicament : ", error);
        });
}

function supprimerMedicament(id) {
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

function ajouterMedicament(medicament) {

    montreModaleAjout.value = false;
    postMedicaments(medicament);

}

function modifierMedicament(medicament) {

    montreModaleModif.value = false;
    putMedicaments(medicament);

}

function Ajouter1(medicament) {
     let newmedicament = { id: medicament._id, denomination: medicament._denomination, formepharmaceutique: medicament._formepharmaceutique, qte: medicament._qte }
    
    if (medicament._qte < 0) {
        newmedicament.qte = 1;
    }
    else {
        newmedicament.qte = newmedicament.qte + 1
    }
    const fetchOptions = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newmedicament)
    };

    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then(() => {
            getMedicaments();
        })
        .catch((error) => {
            console.log("Erreur lors de la modification du médicament : ", error);
        });
}

function Enlever1(medicament) {
    console.log(medicament);;
    
     let newmedicament = { id: medicament._id, denomination: medicament._denomination, formepharmaceutique: medicament._formepharmaceutique, qte: medicament._qte }
    if (medicament._qte < 2) {
        newmedicament.qte = 1;
    }
    else {
        newmedicament.qte = newmedicament.qte - 1
    }
    const fetchOptions = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newmedicament)
    };

    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then(() => {
            getMedicaments();
        })
        .catch((error) => {
            console.log("Erreur lors de la modification du médicament : ", error);
        });
}

function ModaleAjoutOn(medicament) {
    montreModaleAjout.value = true;
    medicamentactuel.value = medicament;
}
function ModaleModifOn(medicament) {
    montreModaleModif.value = true;
    medicamentactuel.value = medicament;
}

function checkScroll() {
    BackToTop.value = window.scrollY > 100;
}

function scrollAuTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

}

function resetRecherche() {
    emit('reinitialiserRecherche');

    scrollAuTop();
}

watch(props, () => {
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
    <div class="title">
        <h2>Liste des Médicaments :</h2>
        <input @click="ModaleAjoutOn(medicament)" class="actionbtn" type="button" value="+ Ajouter un médicament" />
    </div>
    <div id="med-container">
        <div class="titre">
            <div class="med-titre" style="width: 150px;">
                <p>Dénomination</p>
            </div>
            <div class="med-titre" style="width: 100px;">
                <p>Forme</p>
            </div>
            <div class="med-titre" style="width: 100px;">
                <p>Image</p>
            </div>
            <div class="med-titre" style="width: 100px;">
                <p>Quantité</p>
            </div>
            <div class="med-titre" style="width: 100px;">
                <p>Action</p>
            </div>
        </div>

        <div class="trait"></div>

        <div v-if="listeMedicaments.length === 0">
            <br><br>
            <p>Aucun médicament n'a été trouvé...</p>
            <p  class="reset" @click="resetRecherche">Réinitialiser la recherche ?</p>
            <br><br>
        </div>
        <div v-else>
            <div v-for="medicament in listeMedicaments" :key="medicament.id" class="med-item">
                <div class="band"></div>
                <div class="med-infost">
                    <p v-bind:value="medicament.id">{{ medicament.denomination }}</p>
                </div>
                <div class="med-info">
                    <p v-bind:value="medicament.id">{{ medicament.formepharmaceutique }}</p>
                </div>
                <div class="med-info">
                    <img class="med-img" v-bind:src="photourl + medicament.photo">
                </div>
                <div class="med-info">
                    <p v-bind:value="medicament.id">{{ medicament.qte }}</p>
                </div>
                <div class="med-info">
                    <div class="gstock">
                        <input @click="Ajouter1(medicament)" class="inputplus" type="button" value="+" />
                        <input @click="Enlever1(medicament)" class="inputmoins" type="button" value="-" />
                    </div>
                    <div class="gmodsupp">
                        <input @click="ModaleModifOn(medicament)" class="actionbtn" type="button" value="Modifier" />
                        <input class="actionbtn" @click="supprimerMedicament(medicament.id)" type="button"
                            value="Supprimer" />
                    </div>

                </div>
            </div>
        </div>

    </div>

    <ModaleModifier :medicamentactuel="medicamentactuel" :ModModOn="montreModaleModif" @valider_modifier="modifierMedicament"
        @fermer="montreModaleModif = false" />
    <ModaleAjouter :ModAjOn="montreModaleAjout" @valider_ajouter="ajouterMedicament"
        @fermer="montreModaleAjout = false" />
    <button v-show="BackToTop" @click="scrollAuTop" class="back-to-top" aria-label="Revenir en haut"> ▲ </button>

</template>

<style scoped>

.reset {
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    margin-inline: 44%;
}

.title {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-inline: 20%;
    margin-bottom: 2%;
}

.trait {
    height: 1px;
    background-color: #031927;
    margin-inline: 30%;
    margin-block: 1%;

}

.back-to-top {
    position: fixed;
    bottom: 10px;
    right: 155.6px;
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
    max-height: 30px;
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
    padding: 2px;
    border: #031927 1px solid;
    background-color: #e1edfd;
    color: #031927;
    width: (100% - 1px);
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
    padding: 0;
    width: 20px;
    height: 21px;
    border: #031927 1px solid;
    background-color: rgba(162, 255, 222, 0.349);
}

.inputmoins:hover {
    padding: 0;
    width: 20px;
    height: 21px;
    display: flex;
    justify-content: center;
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
    width: 100px;
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
    width: 150px;
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