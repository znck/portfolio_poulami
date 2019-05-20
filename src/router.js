import Vue from 'vue'
import Router from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'
import Home from './views/Home.vue'

Vue.use(Router)

const EncryptedPage = () => import('./components/EncryptedPage.vue')
const Layout = createRouterLayout(layout => import(`@/layouts/${layout}.vue`))

export const projects = [
  {
    path: 'tangify',
    name: 'tangify',
    component: () => import('./views/tangify'),
    meta: {
      title: 'Tangible Learning Toolkit for Children with IDs',
      subtitle: 'Tangify, Academic Project',
      image: require('./assets/thumbnails/tangify.png'),
      locked: true,
    },
  },
  {
    path: 'cpaf',
    name: 'cpaf',
    component: () => import('./views/cpaf'),
    meta: {
      title: 'Visualizing Social Interactions at an Art Festival',
      subtitle: 'Central Pennsylvania Arts Fest App',
      image: require('./assets/thumbnails/cpaf.jpg'),
      locked: true,
    },
  },
  {
    path: 'cpaf',
    name: 'cpaf',
    component: () => import('./views/cpaf'),
    meta: {
      title: 'Digital Modelling of Health Information',
      subtitle: 'A user-centered design of Electronic Health Record',
      image: require('./assets/thumbnails/ehr.jpg'),
      locked: true,
    },
  },
  {
    path: 'bixby1',
    name: 'bixby1',
    props: {
      component: () =>
        import(/* webpackChunkName: "bixby.enc" */ './views/bixby1.vue'),
    },
    component: EncryptedPage,
    meta: {
      title: 'Voice Interaction Modality',
      subtitle: 'Bixby Voice, Samsung',
      image: require('./assets/thumbnails/bixby1.jpg'),
      locked: true,
    },
  },
  {
    path: 'bixby2',
    name: 'bixby2',
    props: {
      component: () =>
        import(/* webpackChunkName: "bixby.enc" */ './views/bixby2.vue'),
    },
    component: EncryptedPage,
    meta: {
      title: 'Creating a Voice Assistant platform',
      subtitle: 'Bixby 2.0, Samsung',
      image: require('./assets/thumbnails/bixby2.jpeg'),
      url: 'bixby2',
      locked: true,
    },
  },
]

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
  },

  {
    path: 'about',
    name: 'about',
    props: {
      component: () =>
        import(/* webpackChunkName: "about.enc" */ './views/About.vue'),
    },
    component: EncryptedPage,
  },
  ...projects,
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      children: routes,
    },
  ],
})
