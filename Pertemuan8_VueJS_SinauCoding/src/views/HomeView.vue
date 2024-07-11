<script setup>
import { reactive } from "vue";
import header from "../data_table/Header.json";
import user from "../data_table/User.json";
import TableComp from "../components/TableComp.vue";

const dataTable = reactive({
  header: header,
  data: user,
});

const handleShow = (data) => {
  alert(
    `Nama : ${data.nama}, Position : ${data.position}, Email : ${data.email}`
  );
};
</script>

<template>
  <div>
    <TableComp :objTable="dataTable" @showData="handleShow" />
  </div>
</template>
