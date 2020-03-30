<template>
  <div class="btn-group mb-3 btn-group-sm" role="group" aria-label="Basic example">
    <button
      v-for="(tab, i) in tabsList"
      :key="i"
      type="button"
      class="btn btn-outline-success"
      :class="{'active': tab.active}"
      @click="fetchData(tab, i)"
    >
      <div v-if="tab.loading" class="spinner-border text-light spinner-border-sm" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <span>{{tab.title}}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ITab } from '@/interfaces/weather'
import axios from '@/utils/axios'

@Component
export default class Tabs extends Vue {
  private loading = false
  private paramsForRequest = {
    q: '',
    units: process.env.VUE_APP_UNITS,
    appid: process.env.VUE_APP_API_KEY
  }

  @Prop({ required: true, type: Array })
  private tabsList!: ITab[]

  private async fetchData (tab: ITab, i: number): Promise<void> {
    this.$emit('toggleOptionTab', { i, property: 'active' })
    this.$emit('toggleOptionTab', { i, property: 'loading' })
    this.paramsForRequest.q = tab.url
    try {
      const { data } = await axios.get('/weather', { params: this.paramsForRequest })
      this.$emit('writeData', data)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>

</style>
