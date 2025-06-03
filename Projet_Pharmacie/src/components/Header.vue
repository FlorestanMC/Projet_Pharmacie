<script setup>
const Mrecherche = "";
</script>

<template>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <header>
        <img alt="Logo Pharmacie ISIS" class="logo" src="../assets/logoo.png" width="150" height="150" />
        <div id="recherche">
            <p>Un médicament en tête ? </p>
            &nbsp;&nbsp;
            <form @submit.prevent="$emit('recherche', Mrecherche)">

                <input type="search" v-model="Mrecherche" placeholder="Ex : Paracétamol" autofocus required>
                <i class="fa fa-search"></i>
            </form>
        </div>
    </header>
</template>
<style scoped>
#recherche p {
    transform: translate(0%, -120%);
}



#recherche {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;

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
    color: #07051a;
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
    background: #07051a;
    color: white;
}

button {
    display: none;
    position: absolute;
    top: 70px;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 20px;
    color: white;
    padding: 4px;
    min-height: max-content;
    background: transparent;
    outline: 0;
    border: 1px solid #303030;
    border-radius: 4px;
    text-align: center;
    width: 100%;
    cursor: pointer;
}

form:valid button {
    display: block;
}

header {
    line-height: 1.5;
    justify-content: space-between;
    background-color: lightcyan;
    border-radius: 10px;
    height: 80px;
    padding-inline: 20px;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>