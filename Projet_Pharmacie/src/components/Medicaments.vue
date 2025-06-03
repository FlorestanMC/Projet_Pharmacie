<script setup>
import ListeMedicaments from "../components/ListeMedicaments.vue";
const props = defineProps(["recherche"]);



function handlerFaire(index) {
    listeC[index].faire();
}

function handlerDelete(index) {
    listeC.splice(index, 1);
}

function handlerAdd(l) {
    let p = new Chose(l);
    listeC.push(p);
}


</script>

<template>
    <ListeMedicaments :recherche="props.recherche" />
</template>