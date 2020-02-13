<template lang="html">
  <div class="question">
    <h2>{{question.name}}</h2>
    <p>{{question.description}}</p>
    <div 
      class='radio-container'
      v-for='option in question.options'
      :key="option.id">
      <input 
        type="checkbox"
        :id='option.id'
        :name='question.name'
      >
      <label :for='option.id'>
        {{option.name}}
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["question"]
  }
</script>

<style lang="scss">
  .question {
    margin-top: var(--spacing);

    h2 {
      font-size: 2rem;
      margin-bottom: .5rem;
    }

    p{
      font-size: 1.6rem;
      margin-bottom: var(--margin);
    }

  .radio-container{
    display: flex;
    align-items: center;
    margin-bottom: .5rem;

    label {
      font-size: 1.6rem;
    }

    input {
      margin: 0 var(--margin);
    }
  }
}
</style>
