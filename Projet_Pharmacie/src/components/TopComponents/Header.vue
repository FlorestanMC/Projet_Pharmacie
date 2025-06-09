<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch} from 'vue';
import ModaleConnexion from './ModaleConnexion.vue';

const montreModale = ref(false);

const props = defineProps(["reinitialiserRecherche"]);

watch(props, () => {
    if (props.reinitialiserRecherche) {
        Mrecherche.value = "";
        emit('recherche', Mrecherche.value);
    }
});

const Mrecherche = defineModel();

const route = useRoute();

const router = useRouter();

const emit = defineEmits(['recherche'])

function recherche() {
    emit('recherche', Mrecherche.value);
}

function goAdmin() {
    montreModale.value = false;
    router.push('/admin');
}

function AccueilOuAdmin() {
    if (route.path === '/admin') {
        router.push('/') // Redirige direct vers Accueil
    } else {
        montreModale.value = true // Ouvre la modale pour se connecter au pannel admin
    }
}

</script>

<template>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <header>
        <img alt="Logo Pharmacie ISIS" class="logo" src="../../assets/logo.png" width="150" height="150" />
        <div id="recherche">
            <form @submit.prevent="$emit('recherche', Mrecherche)">

                <input type="search" v-model="Mrecherche" placeholder="Ex : Paracétamol" required autofocus>
                <i @click.prevent="recherche" class="fa fa-search"></i>
            </form>
        </div>
<h3 @click="AccueilOuAdmin"><i :class="route.path === '/admin' ? 'fas fa-home' : 'fas fa-user-shield'"></i> {{ route.path === '/admin' ? 'Accueil' : 'Admin' }}</h3>        
    </header>
    <ModaleConnexion :ModConOn="montreModale" @succes="goAdmin" @fermer="montreModale = false" />
</template>
<style scoped>
#recherche p {
    transform: translate(0%, -120%);
}

h3 {
    background: #031927;
    color: #fff;
    font-weight: bold;
    padding: 0.5em 1.2em;
    border: none;
    border-radius: 22px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 2px 0px;
    cursor: pointer;
    font-size: 1em;
    letter-spacing: 0.02em;
}

h3:hover {
    border: 1px solid#031927 ;
    color: #031927;
    background-color: #e1edfd;

}

#recherche {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    min-width: 150px;

}

form {
    transform: translate(0%, -50%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: white;
    box-sizing: border-box;
    border-radius: 4px;
    border: 4px solid white;
    padding: 5px;

}

input {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
}

.fa {
    box-sizing: border-box;
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 4px;
    color: #031927;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
}

form:focus-within,
form:hover,
form:valid {
    width: 200px;
    cursor: pointer;
}

form:hover input,
form:focus-within input,
form:valid input {
    width: 100%;
}

form:hover .fa,
form:focus-within .fa,
form:valid .fa {
    background: #031927;
    color: white;
}

form:hover .fa:hover {
    color: #031927;
     background-color: #e1edfd;
    border: 1px solid #031927;
}

.favorite {
    display: block;
}

form:valid button {
    display: block;
}

header {
    line-height: 1.5;
    justify-content: space-between;
    background: linear-gradient(90deg, #e1edfd 0%, #70a3df 100%);
    border-radius: 10px;
    height: 80px;
    padding-inline: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.logo {
    display: block;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
    }


    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>