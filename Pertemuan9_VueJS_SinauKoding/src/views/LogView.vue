<script setup>
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";
import { storeToRefs } from "pinia";
import product from "../data_items/Product.json";

const { count, clicked } = storeToRefs(useCounterStore());
const { decrement } = useCounterStore();

const dataCard = computed(() => {
  return product.filter((item) => clicked.value[item.id]);
});

function remove(itemId) {
  decrement(itemId);
}
</script>

<template>
  <nav>
    <div class="nav_content">
      <ul>
        <li><a href="/">Chart</a></li>
        <li><a href="/log">Log</a></li>
      </ul>
    </div>
  </nav>
  <h1>This is The Chart View Page</h1>
  <p>Total Items : {{ count }}</p>
  <div v-if="dataCard.length > 0">
    <div class="card" v-for="data in dataCard" :key="data.id">
      <div class="card-body">
        <p class="card-title">{{ data.title }}</p>
        <button @click="remove(data.id)">Remove</button>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>There is nothing in your cart</h2>
  </div>
</template>

<style scoped>
</style>
