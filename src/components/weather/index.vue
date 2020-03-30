<template>
  <div>
    <tabs
      :tabsList="tabsList"
      @toggleOptionTab="toggleOptionTab"
      @writeData="writeData"
    ></tabs>
    <table-data
      :temperature="temperature"
      :wind="wind"
    ></table-data>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import Tabs from './tabs.vue'
import TableData from './table-data.vue'
import { ITab, ITemperature, IWind } from '@/interfaces/weather'

@Component({
  components: {
    Tabs,
    TableData
  }
})
export default class IndexWeather extends Vue {
  public tabsList: ITab[] = [
    {
      title: 'Kiev',
      id: 703447,
      loading: false
    },
    {
      title: 'London',
      id: 2643743,
      loading: false
    },
    {
      title: 'New York',
      id: 5128638,
      loading: false
    }
  ]

  public temperature = {}
  public wind = {}

  @Emit('toggleOptionTab')
  toggleOptionTab ({ i, property = 'loading', value }: { i: number; property: keyof ITab; value: boolean }): void {
    this.tabsList.forEach((tab, index) => {
      if (i === index) {
        tab[property] = value
        return
      }
      tab[property] = false
    })
  }

  @Emit('writeData')
  writeData ({ main, wind }: { main: ITemperature; wind: IWind }): void {
    this.temperature = main
    this.wind = wind
  }
}
</script>

<style scoped>

</style>
