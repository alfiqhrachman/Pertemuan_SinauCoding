<script setup>
import { reactive, ref } from "vue";
import product from "../data_items/Product.json";
import { useCounterStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const dataCard = reactive(product);

const { count, clicked } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();

function isClicked(itemId) {
  return clicked[itemId] === true;
}
</script>

<template>
  <h1>This is The Chart View Page</h1>
  <p>Items for sale</p>
  <p>Total Items : {{ count }}</p>
  <div class="card" v-for="data in dataCard" :key="data.id">
    <div class="card-body">
      <p class="card-title">{{ data.title }}</p>
      <button @click="increment(data.id)" :disabled="isClicked(data.id)">
        Add
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>