<template>
  <div class="q-pa-lg">
      <q-table
        title="Usuários"
        :data="tableData"
        :columns="columns"
        row-key="name"
      />

    <q-modal v-model="opened">
      <h4>Basic Modal</h4>
      <q-btn
        color="primary"
        @click="opened = false"
        label="Close"
      />
    </q-modal>

    <it-fab></it-fab>
  </div>
</template>

<style>
</style>

<script>

  import ItFab from './../../components/Fab'
export default {
  components: {
    ItFab
  },
  name: 'PageIndex',

  data: () => ({
    return() {
      opened : false
    },
    columns: [
      {
        name: 'id',
        required: true,
        label: 'ID',
        align: 'left',
        field: 'id',
        sortable: true,
        classes: 'my-class',
        style: 'width: 300px'
      },
      {
        name: 'desc',
        required: true,
        label: 'Nome',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 600px'
      },
      {
        name: 'sigla',
        required: true,
        label: 'Sigla',
        align: 'left',
        field: 'sigla',
        sortable: true,
        classes: 'my-class',
        style: 'width: 600px'
      },
    ],
    tableData: [
      {
        id: 1,
        name: 'Tiago Santana',
        sigla: 'TSS'
      },
      {
        id: 2,
        name: 'Tatiana Alves',
        sigla: 'TAS'
      },
    ]
  })
}
</script>
