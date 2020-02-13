<template>
  <div class='option-container'>
    <span>
      {{option.name}}
    </span>
    <img 
      src="@/assets/trash-icon.png"
      alt="trash icon"
      @click='removeOption'
    >
  </div>
</template>

<script>
export default {
  props: ["option", "questionId"],
  methods: {
    removeOption() {
      this.$store.commit("addRemoveOption", {
        questionId: this.questionId,
        optionId: this.option.id,
        actionType: "remove"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../globalStyles/helper';

  .option-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;
    margin-bottom: var(--margin);
  
    img{
      height: 2.4rem;
    }
  }
</style>