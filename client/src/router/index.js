import { createRouter, createWebHistory } from 'vue-router'
import AddPatient from '../views/AddPatient.vue'
import PatientList from '../views/PatientList'
import PatientPage from '../views/PatientPage'
import EditPatient from '../views/EditPatient'
import MedList from '../views/MedList'
import MedPage from '../views/MedPage'
import AddMeds from '../views/AddMeds'
import EditMeds from '../views/EditMeds'
import ShowReqs from '../views/ShowReqs'
import RequestMeds from '../views/RequestMeds'
import RequestPage from '../views/RequestPage'
import EditRequest from '../views/EditRequest'

const routes = [
  {
    path: '/add-post',
    name: 'add',
    component: AddPatient
  },
  {
    path: '/',
    name: 'home',
    component: PatientList
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PatientPage
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPatient
  },
  {
    path: '/meds/',
    name: 'view-meds',
    component: MedList
  },
  {
    path: '/med/:id',
    name: 'med',
    component: MedPage
  },
  {
    path: '/add-meds/',
    name: 'addMeds',
    component: AddMeds
  },
  {
    path: '/edit-med/:id',
    name: 'edit-med',
    component: EditMeds
  },
  {
    path: '/reqs/',
    name: 'reqs',
    component: ShowReqs
  },
  {
    path: '/add-reqs/:patientName',
    name: 'add-reqs',
    component: RequestMeds
  },
  {
    path: '/req/:id',
    name: 'req-page',
    component: RequestPage
  },
  {
    path: '/edit-req/:id',
    name: 'edit-req',
    component: EditRequest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
