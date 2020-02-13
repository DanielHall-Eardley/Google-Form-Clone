<template>
  <div id="app">
    <div>
      <TitleForm></TitleForm>
      <QuestionForm 
        v-for="question in getQuestions"
        :question="question"
        :key="question.id">
      </QuestionForm>
      <button v-on:click='addQuestion()' class="button-add">
        Add Question
      </button>
    </div>
    <div>
      <Title></Title>
      <Question 
        v-for='question in getQuestions'
        :question="question"
        :key="question.id">
      </Question>
    </div>
  </div>
</template>

<script>
  import TitleForm from '@/components/title/TitleForm.vue'
  import Title from '@/components/title/Title.vue'
  import QuestionForm from '@/components/question/QuestionForm.vue'
  import Question from '@/components/question/Question.vue'


  export default {
    name: 'app',
    components: {
      TitleForm,
      Title,
      QuestionForm,
      Question
    },
    methods:{
      addQuestion(){
        if (!this.$store.state.title) {
          alert("Enter a title and description before adding a question")
          return
        }

        this.$store.commit('addQuestion')
      },
    },
    computed: {
      getQuestions() {
        return this.$store.state.questions
      }
    } 
  }
</script>

<style lang="scss">
  @import './globalStyles/helper';

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0
  }

  html {
    font-size: 62.25%;
  }

  :root{
    --padding: 2rem;
    --margin: 1rem;
    --spacing: 2rem;
    --b-rad: 1rem;
  }

  #app{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: var(--spacing);
    padding: var(--padding);
    background-color: rgb(233, 231, 231);
    min-height: 100vh;
  }
</style>
