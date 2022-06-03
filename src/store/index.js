import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Wake Up',
        done: false,
      },
      {
        id: 2,
        title: 'Do laundry',
        done: false,
      },
      {
        id: 3,
        title: 'Walk dog',
        done: false,
      }
    ]
  },
  getters: {
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      }
      state.tasks.push(newTask)
    },
  },
  actions: {
  },
  modules: {
  }
})
