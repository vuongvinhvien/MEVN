<template>
  <div id="components-pagination-demo-mini">
    <a-pagination size="small" :total="100" />
    <a-pagination
      v-model="current"
      :page-size.sync="pageSize"
      size="small"
      :total="50"
      show-size-changer
      show-quick-jumper
      show-less-items
      @change="onPageChange"
      @showSizeChange="onShowSizeChange"
    />
    <a-pagination
      size="small"
      :total="100"
      :show-total="(total) => `Total ${total} items`"
    />
  </div>
</template>
<style scoped>
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
/* eslint-disable @typescript-eslint/no-unused-vars */
@Component
export default class HelloWorld extends Vue {
  pageSize = 10
  current = 1
  @Watch('pageSize', { immediate: true, deep: true })
  onPageSizeChange(val: number, oldVal: number) {
    console.log('pageSize', oldVal)
    console.log('pageSize', val)
  }

  @Watch('current', { immediate: true, deep: true })
  onCurrentChange(val: number, oldVal: number) {
    console.log('current', val)
  }

  onShowSizeChange(current: number, pageSize: number) {
    console.log(current, pageSize)
  }

  onPageChange(page: number, pageSize: number) {
    console.log('test')
    console.log(page, pageSize)
  }
}
</script>
