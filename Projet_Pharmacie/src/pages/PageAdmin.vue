<script setup>
import Header from '@/components/Header.vue';
import AdminMedicaments from '@/components/AdminMedicaments.vue';
import { ref } from "vue";

const motcle = ref("");

function DefinirProps(r) {


    motcle.value = r;

}
 </script>
 <template>
        <Header @recherche="DefinirProps" />
    <main>
        <AdminMedicaments :recherche="motcle" />
    </main>
 </template>
 <style scoped>
</style>