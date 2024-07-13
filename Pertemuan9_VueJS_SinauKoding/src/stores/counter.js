import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(parseInt(localStorage.getItem("count")) || 0);
  const clicked = ref(JSON.parse(localStorage.getItem("clicked")) || {});

  function increment(itemId) {
    if (!clicked.value[itemId]) {
      count.value++;
      clicked.value[itemId] = true;
    }
  }

  function decrement(itemId) {
    if (clicked.value[itemId]) {
      count.value--;
      delete clicked.value[itemId];
    }
  }

  watch(count, (newCount) => {
    localStorage.setItem("count", newCount);
  });

  watch(
    clicked,
    (newClicked) => {
      localStorage.setItem("clicked", JSON.stringify(newClicked));
    },
    { deep: true }
  );

  return { count, clicked, increment, decrement };
});
