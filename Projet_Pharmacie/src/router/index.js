import { createRouter, createWebHistory } from 'vue-router';
import PageAdmin from '../pages/PageAdmin.vue';
import Accueil from '../pages/PageAccueil.vue';
import ModaleConnexion from '@/components/TopComponents/ModaleConnexion.vue';
import PageError404 from '@/pages/errors/PageError404.vue';

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
      meta: { requireAdmin: true } // Pour accéder à la page requireAdmin doit être : true
    },
    {
      path: '/login-admin',
      name: 'login-admin',
      component: ModaleConnexion
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: PageError404
    }
  ]

})

// Protection sur le routeur pour accéder à la page admin
router.beforeEach((to, from, next) => {
  if (to.meta.requireAdmin) {
    // Vérifie auth stockée en localStorage
    if (localStorage.getItem('admin_auth') === 'authentifié') {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
