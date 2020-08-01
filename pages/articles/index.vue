<template>
  <div class="blog">
    <h1>{{ name }}</h1>
    <ul class="blog_item">
      <li>{{ article.title }}</li>
      <li>{{ article.content }}</li>
      <li>{{ article.signature }}</li>
    </ul>
    <button class="btn btn-primary" @click="getNew">get</button>
  </div>
</template>
<style lang="scss">
.blog_item {
  color: purple;
  // background-color: $primary-color;
}
</style>
<script>
// import { param } from '../../servers/controller/users/users'
// import Vue from 'vue'
export default {
  // async fetch({ $axios }) {
  //   console.log('fetching')
  //   const article = await $axios.get(`/api/articles`, 12).then((res) => {
  //     return res.data
  //   })
  //   console.log(article)
  //   this.article.title = article.title
  // },
  data() {
    return {
      article: {
        title: '',
        content: 'ddd',
        signature: 'ddd',
      },
      name: 'article',
    }
  },
  methods: {
    // async getNew() {
    //   const article = await this.$axios
    //     .get(`/api/articles`, { params: 56 })
    //     .then((res) => {
    //       // console.log(res.data)
    //       return res.data
    //     })
    //   this.article = article
    // },
  },
}
</script>
