<template>
  <div id="app">
    <div class="container">
      <weather></weather>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Weather from '@/components/weather/index.vue'

@Component({
  components: {
    Weather
  }
})
export default class App extends Vue {
  async created () {
    // console.log(await axios.get('weather?q=kyiv&units=metric&appid=' + process.env.VUE_APP_API_KEY))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
