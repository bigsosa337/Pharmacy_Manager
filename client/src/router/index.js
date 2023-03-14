import { createRouter, createWebHistory } from 'vue-router'
import AddPatient from '../views/AddPatient.vue'
import HomePage from '../views/HomePage'
import PatientPage from '../views/PatientPage'


const routes = [
  {
    path: '/add-post',
    name: 'add',
    component: AddPatient
  },
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PatientPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
