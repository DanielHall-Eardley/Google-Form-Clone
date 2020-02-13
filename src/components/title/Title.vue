<template lang="html">
  <div class="title">
    <h1>{{getInput.title}}</h1>
    <p>{{getInput.description}}</p>
  </div>
</template>

<script>
export default {
  computed:{
    getInput(){
      return this.$store.state
    }
  },
}
</script>

<style lang="scss" scoped>
  .title {
    h1 {
      margin-bottom: var(--margin);
      font-size: 3rem;
    }

    p {
      font-size: 1.7rem;
      white-space: pre-wrap;
    }
  }
</style>
