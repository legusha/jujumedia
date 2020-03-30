<template>
  <div id="app">
    <div class="container">
      <h1 class="mb-3">App</h1>
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
export default class App extends Vue {}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/_functions.scss';
@import 'node_modules/bootstrap/scss/_variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

$theme-colors: (
  'success': #6c67e6
);
@import 'bootstrap';
</style>
