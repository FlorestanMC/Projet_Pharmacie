<script setup>
import { ref } from 'vue';


const erreur = ref(false);

const emit = defineEmits(['succes', 'fermer']);

const props = defineProps({
    ModModOn: Boolean
});

function valider_modifer() {

}

function fermer() {
    emit('fermer');
}


const photo = ref(null); // --> variable qui va contenir le fichier en base64
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return; // Si l'utilisateur annule la sélection du fichier, on ne fait rien
  // FileReader est un objet JavaScript permettant de lire le contenu d'un fichier
  // de manière asynchrone.
  const reader = new FileReader();
  reader.onload = () => { // definir le traitement asynchrone du contenu du fichier
    photo.value = reader.result // --> convertit le contenu du fichier en base64
  };
  reader.readAsDataURL(file); // lance la lecture du fichier et donc la conversion en base64
};

</script>

<template>
    <div v-if="ModModOn" class="modale-container">
        <div class="modale">
            <form>
                <input name="denomination" type="text" placeholder="Dénomination" />
                <input name="formepharmaceutique" type="Forme Pharmaceutique"
                    placeholder="Forme Pharmaceutique" />
                <input name="qte" type="number" placeholder="Quantité" />
                <input id="photo" name="photo" @change="handleFileUpload" type="file" />
                <p v-if="erreur" style="color:red;">Attention, il manque des informations ! &#128528</p>
                <button @click="valider_modifier">Confirmer</button>
                <button @click="fermer">Annuler</button>
            </form>
            
        </div>
    </div>
</template>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    
}

.modale-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.modale {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    min-width: 300px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

h2 {
    display: flex;
    justify-content: center;
}

p {
    display: flex;
    justify-content: center;
}

input {
    padding: 10px;
    margin: 5px;
    border: 1px solid #031927;
    border-radius: 2px;
    font-family: Poppins;
}

button {
    padding: 4px;
    color: white;
    background-color: #031927;
    border-radius: 4px;
    border-color: #031927;
    font-weight: 600;
    font-family: Poppins;
    border: 0px;
    cursor: pointer;
    margin: 5px;
}

button:hover {
    border: #031927 1px solid;
    background-color: #e1edfd;
    color: #031927;
}
</style>