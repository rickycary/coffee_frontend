<template>
  <nav class="app">
    <h1>All Coffees</h1>
    <router-view :posts="posts" :url="url" :getPosts="getPosts" />
  </nav>
  <router-view/>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: "App",

  setup(props) {
    const url = "https://coffee-backend.onrender.com/coffee"
    const posts = ref([])
    const getPosts = async () => {
      const response = await fetch(url)
      const data = await response.json()
      posts.value = await data 
    }

    onMounted(() => getPosts())
    return {
      posts, 
      getPosts,
      url,
      ...props,
    }
  }
}
</script>

<style>

</style>
