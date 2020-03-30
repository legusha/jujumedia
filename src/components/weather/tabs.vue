<template>
  <div class="btn-group mb-3 btn-group-sm" role="group" aria-label="Basic example">
    <button
      v-for="(tab, i) in tabsList"
      :key="i"
      type="button"
      class="btn btn-outline-success position-relative"
      :class="{'active': indexActive === i}"
      @click="fetchData(tab, i)"
    >
      <div v-if="tab.loading" class="spinner-border text-light spinner-border-sm tabs_btn__spinner" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <span :class="{'text-success': tab.loading}">{{tab.title}}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ITab } from '@/interfaces/weather'
import axios from '@/utils/axios'

@Component
export default class Tabs extends Vue {
  private indexActive = 0
  private paramsForRequest = {
    id: 0,
    units: process.env.VUE_APP_UNITS,
    appid: process.env.VUE_APP_API_KEY
  }

  @Prop({ required: true, type: Array })
  private tabsList!: ITab[]

  private async fetchData (tab: ITab, i: number): Promise<void> {
    this.$emit('toggleOptionTab', { i, property: 'loading', value: true })
    this.indexActive = i
    this.paramsForRequest.id = tab.id
    try {
      const { data } = await axios.get('/weather', { params: this.paramsForRequest })
      this.$emit('writeData', data)
      this.$emit('toggleOptionTab', { i, property: 'loading', value: false })
    } catch (e) {
      console.error(e)
    }
  }

  created () {
    const tab = this.tabsList[this.indexActive]
    const index = this.indexActive
    this.fetchData(tab, index)
  }
}
</script>

<style scoped>
  .tabs_btn__spinner {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
