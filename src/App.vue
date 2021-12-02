<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <app-quiz />
</template>

<script>
import AppQuiz from './components/AppQuiz.vue'

export default {
  name: 'App',
  components: {
    AppQuiz
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
