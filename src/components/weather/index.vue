<template>
  <div>
    <tabs
      :tabsList="tabsList"
      @toggleOptionTab="toggleOptionTab"
      @writeData="writeData"
    ></tabs>
    <table-data></table-data>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import Tabs from './tabs.vue'
import TableData from './table-data.vue'
import { ITab } from '@/interfaces/weather'

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
      url: 'kyiv',
      active: true,
      loading: false
    },
    {
      title: 'London',
      url: 'london',
      active: false,
      loading: false
    },
    {
      title: 'New York',
      url: 'new_york',
      active: false,
      loading: false
    }
  ]

  public weatherParams = {
    temperature: {
      title: 'Temperature',
      value: '',
      units: '°C'
    },
    atmospheric: {
      title: 'Atmospheric pressure',
      value: '',
      units: 'hPa'
    },
    humidity: {
      title: 'Humidity',
      value: '',
      units: '%'
    },
    windSpeed: {
      title: 'Wind speed',
      value: '',
      units: 'meter/sec'
    },
    windDirection: {
      title: 'Wind direction',
      value: '',
      units: '°'
    }
  }

  @Emit('toggleOptionTab')
  toggleOptionTab ({ i, property = 'active' }: {i: number; property: keyof ITab}): void {
    this.tabsList.forEach((tab, index) => {
      if (i !== index) {
        tab[property] = false
        return
      }
      tab[property] = true
    })
  }

  @Emit('writeData')
  writeData ({ main, wind }: {main: any; wind: any}): void {
    console.log(main, wind)
  }
}
</script>

<style scoped>

</style>
