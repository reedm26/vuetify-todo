<template>
  <div class="home">
    <v-text-field
        v-model="newTaskTitle"
        @click:append="$store.commit('addTask', newTaskTitle)"
        @keyup.enter="$store.commit('addTask',newTaskTitle)"
        class="pa-3"
        outlined
        label="Add Task"
        append-icon="mdi-plus"
        hide-details
        clearable
    ></v-text-field>
    <v-list
        v-if="$store.state.tasks.length"
        flat
        class="pt-0"
    >
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
            @click="doneTask(task.id)"
            :class="{'blue lighten-5' : task.done}"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                  :class="{'text-decoration-line-through' : task.done}"
              >{{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon
                     @click.stop="deleteTask(task.id)"
              >
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div
        v-else
        class="no-tasks"
    >
      <v-icon
          size="100px"
          color="primary"
      >
        mdi-check
      </v-icon>
      <div class="primary--text text-h5">
        No Tasks
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      newTaskTitle: '',
    }
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false
      }
      this.tasks.push(newTask)
      this.newTaskTitle = ''
    },
    doneTask(id) {
      let task = this.tasks.filter(t => t.id === id)[0]
      task.done = !task.done
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }
}
</script>

<style lang="sass">
  .no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>
