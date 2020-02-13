<template lang="html">
  <div class="question-form form">
    <div class="form-inputs">
      <QuestionInput :questionId="question.id"></QuestionInput>
      <Option 
        v-for="option in question.options" 
        :option="option"
        :questionId="question.id"
        :key="option.id">
      </Option>
      <OptionInput :questionId="question.id"></OptionInput>
    </div>  
  </div>
</template>

<script>
  import QuestionInput from "./QuestionInput"
  import OptionInput from "./OptionInput"
  import Option from "./Option"

  export default {
    props: ["question"],
    components: {
      QuestionInput,
      OptionInput,
      Option
    },
  }
</script>

<style lang="scss">
  @import '../../globalStyles/helper';

  .question-form {
    margin-top: var(--margin);
  }
</style>
