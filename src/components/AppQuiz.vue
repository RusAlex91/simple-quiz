<template>
  <base-card v-if="questions == null">
    <form class="quiz-head" @submit.prevent="getQuestions(questionСount)">
      <label class="quiz-quantity-label" for="quiz-quantity">
        Enter the number of questions:
        <input
          required
          id="quiz-quantity"
          type="number"
          v-model="questionСount"
          min="1"
        />
      </label>
      <button>Start</button>
    </form>
  </base-card>
  <div class="quiz-body-wrapper">
    <div class="quiz-body" v-for="(question, index) in questions" :key="index">
      <app-quiz-question
        @nextQuestion="addToCounter()"
        v-if="questions != null && questionNumber == index"
        :question="question"
        :questionNumber="questionNumber"
        @correctAnswer="addToScore"
      />
    </div>
  </div>
  <app-quiz-results
    :correctScore="quizScore"
    v-if="questionNumber === questionСount"
  ></app-quiz-results>
</template>

<script>
import AppQuizQuestion from './AppQuizQuestion.vue'
import AppQuizResults from './AppQuizResults.vue'
import BaseCard from '../components/ui/BaseCard.vue'

import { getQuizQuestions } from '../utils/Api.js'

export default {
  data () {
    return {
      questions: null,
      questionСount: null,
      questionNumber: 0,
      quizScore: 0
    }
  },
  components: {
    AppQuizQuestion,
    AppQuizResults,
    BaseCard
  },
  methods: {
    async getQuestions (count) {
      const array = await getQuizQuestions(count)
      this.questions = array.results
    },
    addToCounter () {
      this.questionNumber++
    },
    addToScore (answer) {
      if (answer) {
        this.quizScore++
      }
    }
  }
}
</script>

<style scoped>
.quiz-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}

.quiz-head button {
  width: 100px;
}

.quiz-quantity-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}

#quiz-quantity {
  width: 5vw;
}
</style>
