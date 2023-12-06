import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import JobDetailsView from '../views/jobs/JobsDetailsView.vue'
import JobsView from '../views/jobs/JobsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    // lazy loading
    component: () => HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobDetailsView,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'notFoundView',
    component: NotFoundView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router