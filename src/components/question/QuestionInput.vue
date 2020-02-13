<template>
  <div class='question-input'>
    <input
      type="text"
      placeholder="Question title"
      class='default-input'
      name='name'
      v-model="name"
      v-on:change="updateQuestion($event)"
    >
    <input
      type="text"
      placeholder="Question description"
      class='default-input'
      name='description'
      v-model="description"      
      v-on:change="updateQuestion($event)"
    >
  </div>
</template>

<script>
export default {
  props: ["questionId"],
  data() {
    return {
      name: "",
      description: ""
    }
  },
  methods: {
    updateQuestion(event) {
      const key = event.target.name

      this.$store.commit("updateQuestion", {
        id: this.questionId,
        value: this[key],
        key
      })

      this[key] = ""
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../globalStyles/helper';

  .question-input {
    margin-top: var(--margin);

    input {
      width: 100%;
      margin-bottom: var(--margin);
    }
  }
</style>