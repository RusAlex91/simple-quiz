<template>
  <div class="quiz-results">User Score: {{ showUserScore }}</div>
</template>

<script>
export default {
  props: {
    correctScore: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    showUserScore () {
      return this.correctScore
    }
  }
}
</script>

<style scoped>
.quiz-results {
  box-shadow: 0 0 5px;
  padding: 10px;
}
</style>
