<template>
  <div class="home">
    <v-list
        flat
       class="pt-0"
    >
      <div  v-for="task in tasks" :key="task.id">
        <v-list-item>
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
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
    }
  }

}
</script>
