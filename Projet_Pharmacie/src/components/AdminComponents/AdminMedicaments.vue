<script setup>
import AdminListeMedicaments from "./AdminListeMedicaments.vue"
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
    
    <AdminListeMedicaments :recherche="props.recherche" />
</template>