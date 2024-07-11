<script setup>
defineProps({
  objTable: {
    type: Object,
    default: {},
    require: false,
  },
});

const emit = defineEmits(["showData"]);
</script>

<template>
  <table border="1">
    <thead>
      <tr>
        <th v-for="(data, index) in objTable.header" :key="index">
          {{ data }}
        </th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="data in objTable.data" :key="data.id">
            <td> {{ data.id }}</td>
            <td> {{ data.nama }}</td>
            <td> {{ data.position }}</td>
            <td> {{ data.no_telp }}</td>
            <td> {{ data.email }}</td>
            <td>
                <button type="Sumbit" @click="emit('showData', data)">Show Data</button>
            </td>
        </tr>
    </tbody>
  </table>
</template>