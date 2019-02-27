<template>
  <q-page-sticky dusk="fab" position="bottom-right" :offset="[18, 18]">
  <q-fab
    color="red"
    icon="keyboard_arrow_up"
    direction="up"
  >
    <q-fab-action
      color="primary"
      @click="clicou"
      icon="add"
    />

    <q-fab-action
      color="secondary"
      @click="clicou"
      icon="alarm"
    />
  </q-fab>
  </q-page-sticky>
</template>

<script>
  export default {
    name: "Fab",

    methods:{
      clicou() {
        this.$q.notify({
          message: 'Deseja adicionar?',
          type: 'positive',
          timeout: 3000,
          position: 'top'
        })
      }
    }
  }
</script>

<style scoped>

</style>
