<template>
  <div class="question">
    <h3 class="category">
      {{ QuizQuestion.category }}
    </h3>
    <p v-html="QuizQuestion.question"></p>
    <base-answer-card
      class="answers"
      @click="sendAnswer(answer), nextQuestion(), checkQuestionAnswer(answer)"
      v-html="answer"
      v-for="(answer, index) in getFullAnswers"
      :key="index"
    ></base-answer-card>
  </div>
</template>

<script>
import { sendQuizAnswer } from '../utils/Api.js'
import BaseAnswerCard from '../components/ui/BaseAnswerCard.vue'

export default {
  data () {
    return {
      QuizQuestion: this.question,
      QuestionNumber: this.questionNumber,
      UserAnswer: null
    }
  },
  components: {
    BaseAnswerCard
  },
  props: {
    question: {
      type: Object,
      required: true
    },
    questionNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  emits: {
    nextQuestion: value => typeof value === 'number',
    correctAnswer: value => typeof value === 'boolean'
  },
  methods: {
    sendAnswer (answer) {
      sendQuizAnswer(answer)
    },
    nextQuestion () {
      this.QuestionNumber++
      this.$emit('nextQuestion', this.QuestionNumber)
    },
    checkQuestionAnswer (answer) {
      if (this.QuizQuestion.correct_answer === answer) {
        this.$emit('correctAnswer', true)
      }
    }
  },
  computed: {
    getFullAnswers () {
      const answers = [
        ...this.QuizQuestion.incorrect_answers,
        this.QuizQuestion.correct_answer
      ]

      return answers
    }
  }
}
</script>

<style scoped>
.question {
  width: 40vw;
  box-shadow: 0 0 5px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.answers:hover {
  background-color: lightblue;
}
.category {
  border: 1px solid lightcoral;
  border-radius: 20px;
  padding: 5px;
}
</style>
