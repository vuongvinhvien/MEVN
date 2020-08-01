<template>
  <div class="error">
    <n-link to="/">
      <img src="@/assets/image/error-page/404.png" alt />
    </n-link>
  </div>
</template>
<style lang="scss">
.error {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  img {
    width: 100%;
    max-width: initial;
  }
}
</style>
<script>
import Vue from 'vue'
export default Vue.extend({})
</script>
