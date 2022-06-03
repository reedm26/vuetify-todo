<template>
  <div class="home">
    <field-add-task />
    <list-tasks
        v-if="$store.state.tasks.length"
    />
    <no-tasks v-else />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    'field-add-task': require('@/components/Todo/FieldAddTask').default,
    'list-tasks': require('@/components/Todo/ListTasks').default,
    'no-tasks': require('@/components/Todo/NoTasks').default
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
