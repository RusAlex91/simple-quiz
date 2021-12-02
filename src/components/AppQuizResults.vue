<template>
  <base-card>
    <div class="quiz-results">User Score: {{ showUserScore }}</div>
  </base-card>
</template>

<script>
import BaseCard from '../components/ui/BaseCard.vue'
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
  },
  components: {
    BaseCard
  }
}
</script>

<style scoped></style>
