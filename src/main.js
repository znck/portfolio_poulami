import Vue from 'vue'
import DecryptChunk from '../encryption/vue-chunk-decryption-plugin'
import privateKey from '../encryption/decryption-key.asc'

Vue.use(DecryptChunk, { privateKey })

import App from './App.vue'
import router, { projects } from './router'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production'

Vue.prototype.$projects = projects
Vue.mixin({
  computed: {
    nextProject() {
      const current = this.$route.name
      const index = this.$projects.findIndex(
        project => project.name === current
      )

      if (index < 0) return null

      return this.$projects[(index + 1) % this.$projects.length]
    },
  },
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
