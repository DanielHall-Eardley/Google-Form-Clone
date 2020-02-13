import Vue from 'vue'
import Vuex from 'vuex'
import generateId from "uuid/v4"

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    title: '',
    description: '',
    questions:[]
  },
  mutations:{
    updateTitle: (state, payload) => {
      state[payload.key] = payload.value
    },
    updateQuestion: (state, payload) => {
      const updatedArray = state.questions
      const checkId = el => el.id.toString() === payload.id.toString()
      const questionIndex = updatedArray.findIndex(checkId)

      if (questionIndex === -1) return 

      updatedArray[questionIndex][payload.key] = payload.value

      state.questions = updatedArray
    },
    addQuestion: (state) => {
      state.questions = [
        ...state.questions,
        {
          id: generateId(),
          name: '',
          description: '',
          options: []
        }
      ]
    },
    deleteQuestion:(state, id)=>{
      const filteredArray = state.questions.filter(el => {
        if (el.id.toString() !== id.toString()) {
          return true
        }
      })
      state.questions = filteredArray
    },
    addRemoveOption: (state, payload)=>{
      const updatedArray = state.questions
      const questionIndex = updatedArray.findIndex(el => el.id.toString() === payload.questionId.toString())
      
      if (questionIndex === -1) return 
      let updatedOptions;
      
      if (payload.actionType ===  "remove") {
        updatedOptions = updatedArray[questionIndex].options.filter(el => {
          if (el.id.toString() !== payload.optionId.toString()) {
            return true
          }
        })
      }

      if (payload.actionType === "add") {
        if (!payload.value) return

        updatedOptions = [
          ...updatedArray[questionIndex].options,
          {
            name: payload.value,
            id: generateId()
          }
        ]
      }

      updatedArray[questionIndex].options = updatedOptions
      state.questions = updatedArray
    },
  }
})
