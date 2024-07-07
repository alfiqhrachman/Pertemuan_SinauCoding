<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const goBack = useRouter();
const customer = route.query.customer;
const totalAmount = route.query.totalAmount;
const totalPrice = route.query.totalPrice;

</script>


<template>
  <div class="payment-container">
    <div class="payment-box">
      <h1>Payment</h1>
      <p>
        Total pembayaran yang harus dibayarkan oleh {{ customer }} dari
        {{ totalAmount }} item sebesar <br> Rp {{ totalPrice }},00
      </p>
      <button type="button" @click="goBack.back()">Back</button>
    </div>
  </div>
</template>

<style scoped>
.payment-container {
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.payment-box {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid;
  margin-top: 4rem;
}

.payment-box h1 {
  font-size: 5rem;
  margin-bottom: 2rem;
}

.payment-box p {
  font-size: 1.3rem;
  line-height: 2.5em;
  margin-bottom: 1.5rem;
}

.payment-box button {
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 15px 25px;
  cursor: pointer;
  transition: border-color 0.5s;
  background-color: #161616;
  color: #f8f8f8;
}

button:hover {
  background-color: #707070;
}
</style>
