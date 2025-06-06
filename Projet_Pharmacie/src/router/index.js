import { createRouter, createWebHistory } from 'vue-router';
import PageAdmin from '../pages/PageAdmin.vue';
import Accueil from '../components/Accueil.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    // Associe des chemins d'accès au composant vue à afficher
  routes: [
    {
        path: '/', // Chemin d'accès
        name: 'Accueil', // Nom du chemin d'accès
        component: Accueil, // Composant à afficher
      },
    {
      path: '/admin', // Chemin d'accès
      name: 'admin', // Nom du chemin d'accès
      component: PageAdmin, // Composant à afficher
    },
  ]
})

export default router
