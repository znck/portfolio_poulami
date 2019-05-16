import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EncryptedPage from './components/EncryptedPage.vue'

import Tangify from './views/tangify'
import Bixby1 from './views/bixby1'
import Bixby2 from './views/bixby2'
import CPAF from './views/cpaf'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tangify',
      name: 'tangify',
      component: Tangify,
    },
    {
      path: '/cpaf',
      name: 'cpaf',
      component: CPAF,
    },
    {
      path: '/bixby1',
      name: 'bixby1',
      component: Bixby1,
    },

    {
      path: '/bixby2',
      name: 'bixby2',
      props: {
        component: () =>
          import(/* webpackChunkName: "about.enc" */ './views/bixby2.vue'),
      },
      component: EncryptedPage,
    },

    {
      path: '/about',
      name: 'about',
      props: {
        component: () =>
          import(/* webpackChunkName: "about.enc" */ './views/About.vue'),
      },
      component: EncryptedPage,
    },
  ],
})
