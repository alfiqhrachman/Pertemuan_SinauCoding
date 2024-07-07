<script setup>
import { ref, reactive, computed} from "vue";
import { useRouter } from "vue-router";

const customer = ref("");

const items = ref([]);

const newStuff = reactive({
  ingredient: "",
  amount: 0,
  price: 0,
});

const addItems = () => {
  items.value.push({ ...newStuff });
  newStuff.ingredient = "";
  newStuff.amount = 0;
  newStuff.price = 0;
};

const totalAmount = computed(() => {
  return items.value.reduce((total, item) => {
    return total + item.amount;
  }, 0);
});

const totalPrice = computed(() => {
  return items.value.reduce((total, data) => {
    return total + data.amount * data.price;
  }, 0);
});

const deleteItems = (index) => {
  items.value.splice(index, 1);
};

const router = useRouter();
const paymentView = () => {
  if (customer.value.trim() === "") {
    alert("Please field in customer name");
  } else {
    router.push({
      path: "/payment",
      query: {
        totalAmount: totalAmount.value,
        totalPrice: totalPrice.value,
        customer: customer.value,
      },
    });
  }
};

</script>

<template>
  <div>
    <h1>List Ingredient</h1>
    <div class="customer">
      <label for="customer">
        Customer <br />
        <input type="text" id="customer" v-model="customer">
      </label>
    </div>
    <span>
      <label for="ingredient">
        Ingredient
        <input type="text" id="ingredient" v-model="newStuff.ingredient">
      </label>
      <label for="amount">
        Amount
        <input type="number" id="amount" v-model="newStuff.amount">
      </label>
      <label for="price">
        Price
        <input type="number" id="price" v-model="newStuff.price">
      </label>
      <button type="submit" @click="addItems()">Submit</button>
    </span>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Ingredient</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="items.length === 0">
          <td colspan="6">Data Empty</td>
        </tr>
        <tr v-for="(data, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ data.ingredient }}</td>
          <td>Rp {{ data.price }}</td>
          <td>{{ data.amount }}</td>
          <td>Rp {{ data.amount * data.price }}</td>
          <td>
            <button type="button" @click="deleteItems(index)">
              Delete
            </button>
          </td>
        </tr>
        <tr v-if="items.length > 0">
          <td colspan="3">Total</td>
          <td> {{ totalAmount }} </td>
          <td>Rp {{ totalPrice}} </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <p>Total Data : {{ items.length }}</p>
      <button type="button" @click="paymentView()" class="tagihanButton">Cetak Tagihan</button>
  </div>
</template>

<style scoped>
.tagihanButton {
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 1em;
  font-weight: 500;
  padding: 12px 22px;
  cursor: pointer;
  transition: border-color 0.5s;
  background-color: #0f0f0f;
  color: #f8f8f8;
  margin-top: 20px;
}

.tagihanButton:hover {
  background-color: #707070;
}

</style>
