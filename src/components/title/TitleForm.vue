<template lang="html">
  <div class='title-form form'>
    <input 
      type="text"
      placeholder="Title"
      class="default-input"
      v-model="title"
      name="title"
      v-on:change='updateTitle($event)'
    >
    <textarea 
      placeholder="Form description"
      v-on:change='updateTitle($event)'
      v-model="description"
      name="description">
    </textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: ""
    }
  },
  methods:{
    updateTitle(e){
      const key = e.target.name
      this.$store.commit('updateTitle', {
        key,
        value: this[key]
      })

      this[key] = ""
    }
  }
}
</script>

<style lang="scss" scoped>
  .title-form {
    display: grid;
    grid-auto-flow: rows;
    grid-row-gap: var(--margin);

    textarea {
      height: 15vh;
      outline: none;
      padding: 1rem;
      border: solid 1px #c5c6c9;
      border-radius: var(--b-rad);

      &:focus {
        border: solid 1px #21cf3e;
      }
    }
  }

</style>
