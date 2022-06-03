<template>
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
</template>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>
