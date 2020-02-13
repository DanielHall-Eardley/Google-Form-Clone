<template>
  <div class="option-input">
    <input
      type="text"
      class='default-input'
      placeholder="Add options"
      v-model="option"
      v-on:change="addOption"
    >
    <div class="button-container">
      <button 
        class='button-add'
        v-on:click='addOption'>
        Add Option
      </button>
      <button 
        class='button-add button-delete'
        v-on:click='deleteQuestion'>
        Delete Question
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["questionId"],
  data() {
    return {
      option: ""
    }
  },
  methods: {
    addOption() {
      this.$store.commit("addRemoveOption", {
        questionId: this.questionId,
        value: this.option,
        actionType: "add"
      })

      this.option = ""
    },
    deleteQuestion() {
      this.$store.commit("deleteQuestion", this.questionId)
    }
  }
}
</script>

<style lang="scss" scoped>
  .option-input {

    input {
      width: 100%;
    }
  }
</style>