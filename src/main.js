import Vue from 'vue'
import DecryptChunk from '../encryption/vue-chunk-decryption-plugin'
import privateKey from '../encryption/decryption-key.asc'

Vue.use(DecryptChunk, { privateKey })

import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.prototype.$projects = [
  {
          title: 'Creating a Voice Assistant platform',
          subtitle: 'Bixby 2.0, Samsung',
          image: require('./assets/thumbnails/bixby2.jpeg'),
          url: 'bixby2',
          locked: true
        },
        
        
        {
          title: 'Voice Interaction Modality',
          subtitle: 'Bixby Voice, Samsung',
          image: require('./assets/thumbnails/bixby1.jpg'),
          url: 'bixby1',
          locked: true
        },
        {
          title: 'Digital Modelling of Health Information',
          subtitle: 'A user-centered design of Electronic Health Record',
          image: require('./assets/thumbnails/ehr.jpg'),
          url: 'ehr',
          locked: true
        },
        {
          title: 'Visualizing Social Interactions at an Art Festival',
          subtitle: 'Central Pennsylvania Arts Fest App',
          image: require('./assets/thumbnails/cpaf.jpg'),
          url: 'cpaf',
          locked: true
        },
        {
          title: 'Tangible Learning Toolkit for Children with IDs',
          subtitle: 'Tangify, Academic Project',
          image: require('./assets/thumbnails/tangify.png'),
          url: 'tangify',
          locked: true
        }
]

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
