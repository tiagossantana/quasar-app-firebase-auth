<template>
  <q-page-sticky dusk="fab" position="bottom-right" :offset="[18, 18]">
    <q-fab
            icon="more_vert"
            direction="up"
            color="primary"
    >
      <q-fab-action v-for="option in options"
                    @click="option.action"
                    :color="option.color ? option.color : 'blue'"
                    :class="option.class ? option.class : 'white'"
                    :icon="option.icon ? option.icon : 'warning'"
                    :key="option.id"
                    :disabled="option.disabled ? option.disabled : false"
      >
        <q-tooltip  anchor="center left"
                    self="center right"
                    :offset="[20, 0]">
                    {{ option.tooltip }}
        </q-tooltip>
      </q-fab-action>
    </q-fab>
  </q-page-sticky>
</template>
<script>
  export default {
    name: 'ItFab',
    props: ['options']
  }
</script>
