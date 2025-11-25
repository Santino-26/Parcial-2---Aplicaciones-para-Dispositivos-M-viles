import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import FavoritesView from '../views/FavoritesView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/detalle/:name', name: 'Detail', component: DetailView, props: true },
  { path: '/favoritos', name: 'Favorites', component: FavoritesView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
