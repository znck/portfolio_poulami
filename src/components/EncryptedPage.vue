<script>
export default {
  name: 'EncryptedPage',
  props: ['component'],
  password() {
    if (this.password) return this.password

    return new Promise(resolve => {
      ;(this.promises = this.promises || []).push(resolve)
    })
  },
  created() {
    this.$on('decryption:loaded', () => {
      this.loading = false
      this.component.loaded = true
    })
    this.$on('decryption:error', (error, retry) => {
      this.loading = this.ready = false
      this.error = error.message
      this.password = ''
      ;(this.promises || []).push(() => retry())
    })
  },
  data() {
    const password = sessionStorage.getItem('password')
    return {
      error: null,
      loading: this.component.loaded !== true,
      password,
      ready: !!password,
      comp: () => this.component(),
    }
  },
  methods: {
    submit() {
      const fns = this.promises || []
      this.promises = []
      this.ready = true
      this.error = 'null'

      sessionStorage.setItem('password', this.password)

      fns.forEach(fn => fn(this.password))
    },
  },
}
</script>

<template>
  <div class="loading" v-if="!ready">
    <form @submit.prevent="submit">
      <input type="password" placeholder ="Password" v-model="password" />
      <button type="submit">Submit</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
  <div v-else-if="loading">
    Loading...
    <component :is="component" />
  </div>
  <component v-else :is="comp" />
</template>
