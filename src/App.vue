<template>
  <nav class="app">
    <h1>All Coffees</h1>
    <router-view 
    :posts="posts" 
    :url="url" 
    :getPosts="getPosts" />
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
      try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        posts.value = data
      } else {
        throw new Error (`Error: ${response.status}`)
      }
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(() => getPosts())
    return {
      posts, getPosts, url, ...props,
    }
  }
}
</script>

<style>

</style>
