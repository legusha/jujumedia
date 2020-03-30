<template>
  <table class="table text-left table-sm">
    <tbody>
    <tr>
      <th scope="row">Temperature</th>
      <td>{{temperature.temp}} °C</td>
    </tr>
    <tr>
      <th scope="row">Atmospheric pressure</th>
      <td>{{temperature.pressure}} hPa</td>
    </tr>
    <tr>
      <th scope="row">Humidity</th>
      <td>{{temperature.humidity}} %</td>
    </tr>
    <tr>
      <th scope="row">Wind speed</th>
      <td>{{ wind.speed }} meter/sec</td>
    </tr>
    <tr>
      <th scope="row">Wind direction</th>
      <td>{{wind.deg}} °</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ITemperature, IWind } from '@/interfaces/weather'

@Component
export default class TableData extends Vue {
  @Prop({ required: true, type: Object })
  private temperature!: ITemperature

  @Prop({ required: true, type: Object })
  private wind!: IWind
}
</script>

<style scoped>

</style>
