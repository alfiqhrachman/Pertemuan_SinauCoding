<script>
import { reactive, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const dataPost = reactive([]);
    const dataAuthor = reactive([]);

    onMounted(() => {
      getDataPost();
      getDataAuthor();
    });

    const getDataPost = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/post');
      dataPost.push(...response.data.slice(0,3));
    };

    const getDataAuthor = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dataAuthor.push(...response.data.slice(0, 5));
    };

    return { dataPost, dataAuthor };
  },
};
</script>


<template>
  <div>
    <h1>Post</h1>
    <div v-for="post in dataPost" :key="post.id">
      <div class="card">
        <h5>{{ post.title }}</h5>
        <p>{{ post.body }}</p>
      </div>
    </div>
    <h1>Author</h1>
    <div class="flex">
      <div class="card" v-for="author in dataAuthor" :key="author.index">
        <h3>{{ author.name }}</h3>
        <p>{{ author.username }}</p>
        <p>{{ author.email }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
