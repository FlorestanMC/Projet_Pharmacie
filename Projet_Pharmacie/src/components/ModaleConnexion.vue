<script setup>
import { ref, defineEmits } from 'vue';

const motdepasse = ref('');

const erreur = ref(false);

const emit = defineEmits(['succes', 'fermer']);

const props = defineProps({
    ModConOn: Boolean
});


function login() {
    if (motdepasse.value === 'Mdptressecurise1234$$') {
        localStorage.setItem('admin_auth', 'authentifié');
        erreur.value = false;
        emit('succes');
        fermer();
    } else {
        erreur.value = true;
    }
}

function fermer() {
    motdepasse.value = '';
    erreur.value = false;
    emit('fermer');
}

</script>

<template>
    <div v-if="ModConOn" class="modale-container">
        <div class="modale">
            <h2>Mot de passe Admin</h2>
            <input v-model="motdepasse" type="password" placeholder="Chhhht c'est un petit secret !" @keyup.enter="login" />
            <button @click="login">Connexion</button>
            <button @click="fermer">Annuler</button>
            <p v-if="erreur" style="color:red;">Mot de passe incorrect &#128544</p>
        </div>
    </div>
</template>

<style scoped>
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
    border: 1px solid #031927;
    border-radius: 2px;
    padding: 4px;
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
}

button:hover {
    border: #031927 1px solid;
    background-color: #e1edfd;
    color: #031927;
}
</style>