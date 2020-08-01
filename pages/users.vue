<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ user.name }}
      </h1>
      <div class="links">
        <n-link class="button--grey" to="/">home</n-link>
        <n-link class="button--grey" to="/api/users">new</n-link>
        <button class="button--grey" @click="getUser()">get users</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { Dictionary } from 'vue-router/types/router'
export default Vue.extend({
  data() {
    return {
      user: {
        name: 'vien',
        age: 30,
      },
    }
  },
  methods: {
    async getUser() {
      // this.$axios.setBaseURL('http://localhost:57481')
      // console.log([this.$axios])
      // console.log(process.env)
      // console.log(process.env.NODE_ENV)
      // console.log(process.env.URL)
      // console.log(process.env.BASE_URL)
      // console.log(this.$config.browserBaseURL)
      // console.log(this.$config)
      for (let i = 0; i < 20000; i++) {
        await this.$axios.get('/api/users').then((res) => {
          this.user.name = res.data
          // eslint-disable-next-line no-console
          console.log(res.data)
        })
      }
    },
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
